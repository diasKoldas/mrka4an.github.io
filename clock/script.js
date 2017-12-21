const hourHand = document.querySelector('.hour-hand');
const minHand = document.querySelector('.min-hand');
const secondHand = document.querySelector('.second-hand');

function setDate () {
	let now = new Date();

	const hours = now.getHours();
	const hourDegrees = (hours * 30) + 90;
	hourHand.style.transform = `rotate(${hourDegrees}deg)`;

	const mins = now.getMinutes();
	const minDegrees = (mins * 6) + 90;
	minHand.style.transform = `rotate(${minDegrees}deg)`;

	const seconds = now.getSeconds();
	const secondDegrees = (seconds * 6) + 90;
	secondHand.style.transform = `rotate(${secondDegrees}deg)`;

	console.log(hours);

	if (seconds > 0 && seconds < 30) {
		secondHand.querySelector('p').style.transform = `rotate(180deg)`; 
	} else {
		secondHand.querySelector('p').style.transform = `rotate(0deg)`; 
	}

	if (mins > 0 && mins < 30) {
		minHand.querySelector('p').style.transform = `rotate(180deg)`; 
	} else {
		minHand.querySelector('p').style.transform = `rotate(0deg)`; 
	}

	if (hours > 0 && hours < 30) {
		hourHand.querySelector('p').style.transform = `rotate(180deg)`; 
	} else {
		hourHand.querySelector('p').style.transform = `rotate(0deg)`; 
	}

}

setInterval(setDate , 1000);