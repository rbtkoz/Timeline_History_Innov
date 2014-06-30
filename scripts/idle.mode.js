$(document).ready(function() {

	"use strict";
	
	//ADD VIDEO TO SCREEN

	$(".jumbotron").prepend("<video loop src='media/ATTHistoryVid_1.mp4' id='video' autoplay='autoplay'></video>");

	$("video").css("display", "none");
	$("video").fadeIn(500);

	//WHEN SCREEN IS TOUCHED PAUSE VIDEO AND FADEOUT
	var video = $("#video");

	$(".tour-btn").click(function(e) {
		e.preventDefault();
    $("video").fadeOut(300, function() { 
     window.location.href = "main.html";
    });
	});

	//AFTER 1 MIN OF NO TOUCH THEN RESET PAGE TO HOME SCREEN AND START VIDEO

	var activityTimeout = setTimeout(inActive, 100000);

	function resetActive(){
	    clearTimeout(activityTimeout);
	    activityTimeout = setTimeout(inActive, 100000);
	}

	// No activity do something.
	function inActive(){
		$("body").fadeOut(300, function() { 
	   	window.location.href = "index.html";
	   	$("body").fadeIn("slow");
	    $("#video").get(0).play();
	  });
	}

	// Check for mousemove, could add other events here such as checking for key presses ect.
	$(document).bind('mousemove', function(){resetActive()});

});