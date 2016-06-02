$(document).ready(init);

function init() {
	$("#code").click(content);
}

function content() {
	//$("#content").html("<ul> <li> Element #1 </li> <li> Element #3 </li> </ul>");
	
	//$("#content").append("BUY NOW, NOW, NOW NOW, NNNNNNNNOOOOOOOWWWWWWWWWWWWWW");

	//$("#content").prepend("Before i died.");

	$("#content").after(". And after all.");

	$("#content").before("Wake me up ");

}