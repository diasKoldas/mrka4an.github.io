var deadline = new Date(`2018/06/19`);
function updateClock(){
  var today = new Date();
  var diff = Date.parse(deadline) - Date.parse(today);
  if(diff<=0){
    clearInterval(interval);
  }
  else{
	  var seconds = (diff/1000);
	  var days = Math.floor(diff/(1000*60*60*24));
    var monthsEl,daysEL,hoursEl,minutesEl,secondsEl;
    if (days > 99) {
    	daysEL = document.querySelector("#days").innerHTML = ('0'+days).slice(-3);
    } else {
    	daysEL = document.querySelector("#days").innerHTML = ('0'+days).slice(-2);
    }
  	secondsEl = document.querySelector("#seconds").innerHTML = (seconds);
  }
}
var interval = setInterval(updateClock,100);
