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
		var template = `
			<div class="row">
				<div class="col-xs-12">
					<h3>${quote}</h3>
					<h4 id="author">${quoteObj.author}</h4>
				</div>
			</div>		
		`

		document.getElementById('quote').innerHTML = template
	}

	$("#quote").hover(function(){
        $("#author").show()
    }, function(){
		$("#author").hide()
	})

	getQuote()
}
