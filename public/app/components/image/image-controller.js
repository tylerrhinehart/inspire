function ImageController() {
	//Your ImageService is a global constructor function what can you do here if you new it up?
	var imageService = new ImageService()

	function getImage() {
		imageService.getImage(drawImage)
	}

	function drawImage(image) {
		// console.log(image)
		var url = image.url
		// console.log(url)
		document.body.style.background = `url(${url}) no-repeat center center fixed`
		document.body.style.backgroundSize = 'cover'
	}

	var myVar = setInterval(function () {
		myTimer();
	}, 1000);

	function myTimer() {
		var d = new Date();
		var template = `<div><p>${d.toLocaleTimeString()}</p></div>`
		document.getElementById("clock").innerHTML = template
	}

	getImage()

}


