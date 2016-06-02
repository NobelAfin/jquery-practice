$( document ).ready(function() {

	$(".list").click(onClickElement);
	$("#war").click(linkGo);
	var add = $("#add");
	var del = $("#del");
	
add.click(onAddClick){
    $("")
};

del.click(onDelClick){



    function onAddCLick (){
    	$("#war").removeClass("elem2");
    	$("#war").addClass("elem1");
    };

    function onDelClick () {
    	$("#war").removeClass("elem1");
    	$("#war").addClass("elem2");
    };

	function onClickElement() {
       /*  $("#warson").css({
         	"background-color":"pink",
         	"font-size":"30px", }); */
         	$(this).css({
         		"background-color":"red",
         		"font-size":"3rem"

         		$(".hola")

         	})
	};
    function linkGo () {
    	$("[href='#']").attr("href","https://google.com");
    }
};