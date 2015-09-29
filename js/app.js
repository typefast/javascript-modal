var launchButton = document.getElementById('launch');
//create a modal close button
var closeButton = document.createElement('button');

function modal() {
	//create div element
	var modal = document.createElement('div');
	//give the created element a class
	modal.className = "modal";
	//append the created element to the body
	document.body.appendChild(modal);
	//give modal some text
	var text = modal.innerHTML = "<h1>A JavaScript Modal</h1>";
	text = modal.innerHTML += "<h1>Click The Button To Close</h1>";
	text = modal.innerHTML += "<h1>Keep On Searching...</h1>";
	//give the close button a class
	closeButton.className = "closeButton";
	closeButton.innerHTML = "Close";
	//append the close button to the modal
	modal.appendChild(closeButton);

	stars(modal);
}

function randomNumberGenerator() {
	//generate a random number
	return Math.floor(Math.random() * 1500) + 1;
}

function stars(appendElement) {
	
	//loop over and append stars
	for (var i = 0; i <= 20; i++) {
		//create a star
		var stars = document.createElement('div');
		//add a class
		stars.className = "stars";
		//use randomNumberGenerator to randomly place the stars
		stars.style.left = (window.innerWidth - 50) - randomNumberGenerator() + "px";
		stars.style.top = (window.innerHeight - 50) - randomNumberGenerator() + "px";
		//append each newly generated star to the 'appendElement' parameter
		appendElement.appendChild(stars);
	}
}

function clearAll() {
	var classModal = document.querySelector('.modal');
	while (classModal) {
		classModal.parentNode.removeChild(classModal);
	}
}

launchButton.addEventListener('click', modal);
closeButton.addEventListener('click', clearAll);




