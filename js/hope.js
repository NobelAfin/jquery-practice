$(document).ready(init);

function init() {
      $("#showContent").click(showContent);
      $("#hideContent").click(hideContent);
}


function showContent() {
    //$("p").show();
    //$("p").show("slow");
    //$("p").show(2000);
    //$("p").fadeIn(2000);

    //velocidad y transparencia
    //$("p").fadeTo(2000, 0.5);

    //ensena y esconde
    //$("p").toggle(2000);

    //$("p")slideDown(2000);

    //$("p").slideToggle(2000);

    //$("p").animate({height: 300}, 2000);
    //$("p").animate({height: 300, width:400}, 2000)    
}

function hideContent() {
	//$("p").hide();
	//$("p").hide("fast");
	//$("p").hide(3000);
	//$("p").fadeOut(2000);

	// Speed & Transparency
	$("p").fadeTo(2000, 0.9);

	// Slide down
	//$("p").slideUp(2000);

	//Callback
	$("p").hide(2500, callbackFunction);
	alert("where am i")
}

function callbackFunction() {
	alert("ANIMATE")
}
