function TodoController() {
	// new up the TodoService that has already been configured for your use
	// You will need four methods
	// getTodos should request your api/todos and give an array of todos to your callback fn
	// addTodo takes in a todo and posts it to the server
	// toggleTodoStatus takes in a todo marks its status as completed and puts it to the server
	// removeTodo takes in a todoId and sends a delete request to the server
	// **** HINT: Everytime you make a change to any todo don't forget to get the todo list again
	var todoService = new TodoService()

	// Use this getTodos function as your callback for all other edits
	function getTodos() {
		//FYI DONT EDIT ME :)
		todoService.getTodos(draw)
	}

	function draw(todos) {
		console.log(todos)
		var template = `
			<table>
			<thead>
				<tr>
					<th>Todo List ${completedTodos(todos)}</th>
					<th>Completed</th>
				</tr>
			</thead>
			<tbody>
		`
		//WHAT IS MY PURPOSE?
		//BUILD YOUR TODO TEMPLATE HERE
		for (var i = 0; i < todos.length; i++) {
			var item = todos[i]
			template += `
				
					<tr>
						<td>${item.description}</td>
						<td>
							<label onclick="app.controllers.todoController.toggleTodoStatus('${item._id}')">
								<input type="checkbox" value="" ${checked(item.completed)}>
							</label>
						</td>
						<td><i class="fa fa-minus-circle" aria-hidden="true" onclick="app.controllers.todoController.removeTodo('${item._id}')"></i></td>
					</tr>
						
		`
		}
		template += `
			</tbody>
			</table>
			<form onsubmit="app.controllers.todoController.addTodoFromForm(event)">
				<input type="text" name="description" placeholder="Todo Item">
				<button type="submit">Add to List</button>
			</form>
		`
		//DONT FORGET TO LOOP

		document.getElementById('todo').innerHTML = template
	}

	function checked(bool) {
		if (bool) {
			return 'checked'
		}
		else {
			return
		}
	}

	function completedTodos(todos) {
		var total = 0
		var completed = 0
		for (var i = 0; i < todos.length; i++) {
			var item = todos[i]
			total++
			if(item.completed) {
				completed++
			}
		}
		var template = `(${completed}/${total})`
		return template
	}

	this.addTodoFromForm = function (e) {
		e.preventDefault() // <-- hey this time its a freebie don't forget this
		// TAKE THE INFORMATION FORM THE FORM
		var form = e.target
		var todo = {
			// DONT FORGET TO BUILD YOUR TODO OBJECT
			description: form.description.value
		}

		//PASSES THE NEW TODO TO YOUR SERVICE
		//DON'T FORGET TO REDRAW THE SCREEN WITH THE NEW TODO
		//YOU SHOULDN'T NEED TO CHANGE THIS
		todoService.addTodo(todo, getTodos)
		//^^^^^^^ EXAMPLE OF HOW TO GET YOUR TOODOS AFTER AN EDIT
	}

	this.toggleTodoStatus = function (todoId) {
		// asks the service to edit the todo status
		todoService.toggleTodoStatus(todoId, getTodos)
		// YEP THATS IT FOR ME
	}

	this.removeTodo = function (todoId) {
		// ask the service to run the remove todo with this id
		todoService.removeTodo(todoId, getTodos)
		// ^^^^ THIS LINE OF CODE PROBABLY LOOKS VERY SIMILAR TO THE toggleTodoStatus
	}

	// IF YOU WANT YOUR TODO LIST TO DRAW WHEN THE PAGE FIRST LOADS WHAT SHOULD YOU CALL HERE???
	getTodos()
}
