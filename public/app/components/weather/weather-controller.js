function WeatherController() {
	var wc = this;
	var weatherService = new WeatherService();

	weatherService.getWeather(drawWeather)
	//What can you do with this weather object?


	function drawWeather(obj) {
		console.log(obj)
		var template = ''
		template = `
			<div class="row">
				<div class="col-xs-2 col-xs-offset-10">
					<h3>${obj.name}</h3>
					<h4>${obj.weather[0].description}
					<h4>${convertTemp(obj.main.temp)} F<img src="//openweathermap.org/img/w/${obj.weather[0].icon}.png"></h4>
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
