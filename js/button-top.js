let upButton = document.querySelector('.nav-metka');

window.onscroll = function () {
	if (window.pageYOffset > 600) {
		upButton.classList.add('shown');
	} else {
		upButton.classList.remove('shown');
	}

};

upButton.onclick = function () {
	window.scrollTo(0, 0);
};