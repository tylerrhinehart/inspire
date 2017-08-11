function WeatherController() {
	var wc = this;
	var weatherService = new WeatherService();

	weatherService.getWeather(drawWeather)
	//What can you do with this weather object?


	function drawWeather(obj) {
		// console.log(obj.main)
		var template = ''
		template = `
			<div class="row">
				<div class="col-xs-1 col-xs-offset-11">
					<h3>${obj.name}</h3>
					<h4>${convertTemp(obj.main.temp)} F</h4>
				</div>
			</div>
		`
		document.getElementById('weather').innerHTML = template
	}

	function convertTemp(temp) {
		var f = Math.ceil(temp * (9/5) - 459.67)
		
		return f
	}

}
