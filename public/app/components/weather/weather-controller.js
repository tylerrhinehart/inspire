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
					<h4>${obj.main.temp} K</h4>
				</div>
			</div>
		`
		document.getElementById('weather').innerHTML = template
	}

}
