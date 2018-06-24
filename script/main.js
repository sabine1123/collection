$(document).ready(function(){


function setDate(){
	const now = new Date();
	const sec = now.getSeconds();
	const min = now.getMinutes();
	const hour = now.getHours();

	// var secDeg = (360/60)*sec;
	// $('.time .sec').css('transform','rotate('+(secDeg*sec)+'deg)');

	// console.log(secDeg);
}

setInterval(setDate,1000);

});