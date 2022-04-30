let root =  document.documentElement;
setInterval(update_width, 1);

function update_width() {
	document.documentElement.style.setProperty('--W', (document.documentElement.clientWidth / 2 - 175 - 32));
}