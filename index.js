let userInput = document.getElementById('input');
let searchButton = document.getElementById('search');
let display = document.getElementById('display');


searchButton.addEventListener('click', () => {
	while(display.hasChildNodes()) {
		display.removeChild(display.lastChild);
	}

	if(userInput.value.length > 0) {
		App.utils.Get(`https://api.gettyimages.com/v3/search/images?phrase=${userInput.value}`,(data) => {
			const parsedData = JSON.parse(data);

			let i = 0;
			while(parsedData.images[i] !== undefined) {
				
				let displayBox = document.createElement('div');
				displayBox.className = 'displayBox';
				let picture = document.createElement('img');
				picture.src = parsedData.images[i].display_sizes[0].uri;
				displayBox.appendChild(picture);

				display.appendChild(displayBox);
				i++;
			}
		})
	}
})