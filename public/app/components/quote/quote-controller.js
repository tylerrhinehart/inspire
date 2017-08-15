function QuoteController() {

	var qs = new QuoteService()

	function getQuote() {
		qs.getQuote(drawQuote)
	}

	// qs.getQuote(function(quote){
	// 	console.log('What is the quote', quote)
	// })

	function drawQuote(quoteObj) {
		var quote = quoteObj.quote
		var searchName = searchAuthor(`${quoteObj.author}`)
		var template = `
			<div class="row" id="quote-row">
				<div class="col-xs-6 col-xs-offset-3">
					<h3 id="quote-tag">"${quote}"</h3>
					<a href="//www.google.com/search?q=quotes+by+${searchName}"><h4 id="author">~${quoteObj.author}~</h4></a>
				</div>
			</div>
		`

		document.getElementById('quote').innerHTML = template
		document.getElementById('quote-tag').style.fontSize = '2rem'
	}

	function searchAuthor(name) {
		var formattedName = name.split(' ').join('+')
		return formattedName
	}

	$("#quote").hover(function () {
		$("#author").show()
	}, function () {
		$("#author").hide()
	})

	getQuote()
}
