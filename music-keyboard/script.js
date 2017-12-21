const keys = document.querySelectorAll('.key') 
// returns NodeList(array of an elements)

function playSound(e) { // play audio when key was down
	const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
	const key = document.querySelector(`div.key[data-key="${e.keyCode}"]`);
	if( !audio ) { return };
	audio.currentTime = 0;
	audio.play();
	key.classList.add('playing');
} 
window.addEventListener("keydown" , playSound);

function removeTransition(e) { // runs when transition is ends
	if (e.propertyName !== 'transform') return
	this.classList.remove('playing')
}
keys.forEach( (k) => {
	k.addEventListener('transitionend', removeTransition);
});

