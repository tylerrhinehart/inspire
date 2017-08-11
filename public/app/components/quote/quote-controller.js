function QuoteController(){

	var qs = new QuoteService()

	function getQuote() {
		qs.getQuote(drawQuote)
	}

	// qs.getQuote(function(quote){
	// 	console.log('What is the quote', quote)
	// })

	function drawQuote(quoteObj) {
		console.log(quoteObj)
		var quote = quoteObj.quote
		document.getElementById('quote').innerHTML = quote
	}

	getQuote()
}
