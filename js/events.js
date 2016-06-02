$(document).ready(init);

function init() {
	//$("h1").mouseover(makeOver);
	//$("h1").mouseout(makeOutOver);
	// Simplify
   //$("h1").hover(makeOver, makeOutOver);
	// Location (x, y)
	// $(document).mousemove(locationCursor);
	$("h1").mousedown(makeDown);
	$("h1").mouseup(makeUp);
}

function makeOver() {
	//Click event Mouse Hover
	$(this).css("background-color", "peru")
}


function makeOutOver() {
	// Click event Mouse Out
	$(this).css("background-color", "pink")
}

/*function locationCursor(event) {
	$("#position").text("Location for X in Mouse: " + event.clientX +"Location for Y in Mouse: " + event.clientY)

}*/

function makeDown() {
	$("#press").text("You pressed the button!");
}

function makeUp() {
	$("#press").text("You dropped the button! >-<")
}