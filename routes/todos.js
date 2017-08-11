// You should put your todo schema should go here
var express = require('express')
var router = express.Router()
var mongoose = require('mongoose')

var todoSchema = new mongoose.Schema({
	description: { type: String, required: true },
})

var Todos = mongoose.model('Todo', todoSchema)

router.get('/', function (req, res, next) {
	Todos.find({})
		.then((todos) => {
			res.send(todos)
		})
		.catch(next)
})

router.post('/', function (req, res, next) {
	Todos.create(req.body) // PROMISE
		.then((todo) => {
			res.send(todo)
		})
		.catch(next)
})

router.put('/todoId', function (req, res, next) {
	var todoId = req.params.todoId
	var updatedTodoObj = req.body
	Todos.findByIdAndUpdate(todoId, updatedTodoObj)
		.then(todo => {
			res.send({message: 'Updated todo'})
		})
		.catch(next)
})

router.delete('/:todoId', function (req, res, next) {
	var todoId = req.params.todoId
	Todos.findByIdAndRemove(todoId)
		.then(todo => {
			res.send({message: 'Removed todo'})
		})
		.catch(next)
})

router.use(defualtErrorHandler);

function defualtErrorHandler(err, req, res, next) {

	if (req.xhr) {
		res.json({ success: false, error: err });
	}
	else {
		res.json({ success: false, error: err.message });
	}
}

module.exports = router