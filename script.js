/* script.js */

$(document).ready(function(){

	var color = $("example").css("background-color");
	console.log(color); // check console for log

	// we add a trigger for click events on div
	$("div").click(function() {
		$("span").addClass("cool-text");
		$(".example").css("background-color", "#FFF");
	});

	// $("p").fadeOut("slow", function() {
	// 	  $("p").show(); // show back after fadeout
	// });

	// $(".example").slideUp();

	// $("h1").hide();

});