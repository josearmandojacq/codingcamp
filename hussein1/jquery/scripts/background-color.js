$("#co").on("click", function() {
	$("body").css("background","green");
})

$("#co1").on("click", function() {
	$("body").css("background","blue");
})

$("#co2").on("click", function() {
	$("body").css("background","yellow");
})

var $rest= $('<input type="button" value="reset"/>');
	$rest.appendTo($("body"));
	$rest.on("click", function(){
		$("body").css("background","");
	})