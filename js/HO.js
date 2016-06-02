$(document).ready(init);

function init() {
	$("p").click(greenTeam);
}

function greenTeam(){
 // Modify
  $("a").attr("href", "https://www.google.com");
  console.log($("a").attr("href"));
// Remove Attr
// $(this).removeAttr("href");
// console.log($(this).attr("href"));
}