var W = window.innerWidth / 2 - 150 - 32;
let root =  document.documentElement
document.addEventListener('mousemove', e => {
	document.documentElement.style.setProperty('--W', W);
}, {passive: true});