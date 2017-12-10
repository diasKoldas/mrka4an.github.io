var deadline = new Date(`2018/03/20`);// Милисекунды до этой даты
function updateClock(){
  var today = new Date();
  var diff = Date.parse(deadline) - Date.parse(today);
  // console.log(Date.parse(deadline));
  if(diff<=0){
    clearInterval(interval);
  }
  else{
	  var seconds = Math.floor((diff/1000)%60);
	  var minutes = Math.floor((diff/1000/60)%60);
	  var hours = Math.floor((diff/1000/60/60)%24);
	  var days = Math.floor(diff/(1000*60*60*24)%30.5);
	  var months = Math.floor(diff/(1000*60*60*24*30.5)%12);
	  console.log(('0'+seconds).slice(-2));
    
    var monthsEl,daysEL,hoursEl,minutesEl,secondsEl;
    monthsEl = document.querySelector("#months").innerHTML = ('0'+months).slice(-2);
  	daysEL = document.querySelector("#days").innerHTML = ('0'+days).slice(-2);
  	hoursEl = document.querySelector("#hours").innerHTML = ('0'+hours).slice(-2);
  	minutesEl = document.querySelector("#minutes").innerHTML = ('0'+minutes).slice(-2);
  	secondsEl = document.querySelector("#seconds").innerHTML = ('0'+seconds).slice(-2);
  }
}
var interval = setInterval(updateClock,1000);





