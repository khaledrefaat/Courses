document.querySelector('h1').addEventListener('click', () => {
	document.querySelector('h1').classList.add('rotate');
	setTimeout(removeRotate, 3000);
	function removeRotate() {
		document.querySelector('h1').classList.remove('rotate');
	}
});

document.querySelector('h2').addEventListener('click', () => {
	document.querySelector('h2').classList.add('revrotate');
	setTimeout(removeRotate, 3000);
	function removeRotate() {
		document.querySelector('h2').classList.remove('revrotate');
	}
});
