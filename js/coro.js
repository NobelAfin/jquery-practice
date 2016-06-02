$(document).ready(init);

function init() {
	$("p").click(changeText);
}

function changeText() {
	$(this).text("Esto es lo nuevo y te callas");
}
