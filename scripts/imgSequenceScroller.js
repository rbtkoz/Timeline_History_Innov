$( document ).ready(function() {

"use strict";

//success function simply prints to console
function loading(img,size){
    console.log("loading"+img);

    if(img == size-1){
      console.log("complete!!!!!!!!!!!");
      
    }
}

//loading array function
function preLoad(file,total_array,array,type){
  for(var i = 1; i < total_array; i++) {
  	var file_entry = file + i +type;
  	var img = new Image;
  	img.src = file_entry;
  	array.push(img);
    loading(i, total_array);

  }
  return images;
}

//actual preloader
function addLoadEvent(func) {
  var on_load = window.onload;
  if (typeof window.onload != 'function') {
    window.onload = func;
  } else {
    window.onload = function() {
      if (on_load) {
        on_load();
      }
      func();
    }
  }
}

var images = new Array();
var size = 1048;
var filename = 'media/CELLPHONE_';
var file_type =".png";

//call function
preLoad(filename,size,images,file_type);


var canv = document.getElementById('background');
var context = canv.getContext('2d');

$(canv)
	.width($(window).width())
	.height($(window).height());


	var currentLocation = 0;
  //variable for 1/4 proportion 
	var arr = Math.floor(images.length/4);

	var lastScroll = 0;

  var maxScrollLeft = document.getElementById('all').scrollWidth - document.getElementById('all').clientWidth;

  
  //this resets to beginning 0 of experience *****seems to break it needs rewrite
  // var window_loc = $('body').animate({scrollLeft: -1}, 1000);


  window.addEventListener('scroll', function(e) {
 	  var window_loc = $(this).scrollLeft();
    
    if(window_loc > lastScroll){

       if (window_loc - lastScroll < 10){
    		// console.log("swiping left!");
    		currentLocation += 1;
        // console.log("+advanced 1 frame");
        // console.log("frame = " +currentLocation);
        // console.log('window_loc' + window_loc);
          
          if (currentLocation >= images.length-1) {
            // console.log("im less than zero");
            currentLocation = images.length-1;
            window_loc = $('body').animate({scrollLeft: maxScrollLeft}, 0);

          }
      }
    	if (window_loc - lastScroll > 10){
    		// console.log("swiping right!");
    		currentLocation += 5;
      //   console.log("+++++advanced 5 frames");
    		// console.log("frame =" +currentLocation);
      //   console.log('window_loc' + window_loc);

          if (currentLocation >= images.length-1) {
            // console.log("im less than zero");
            currentLocation = images.length-1;
            window_loc = $('body').animate({scrollLeft: maxScrollLeft}, 0);


          }
      }
    }
    
    if(window_loc < lastScroll){

      if (window_loc - lastScroll > -10){
        // console.log("swiping left!");

        currentLocation -= 1;
        // console.log("- deadvanced 1 frame");

        // console.log("frame = " +currentLocation);
        // console.log('window_loc' + window_loc);

        if (currentLocation <= 0) {
            // console.log("im less than zero");
            currentLocation = 0;
             window_loc = $('body').animate({scrollLeft: 1}, 0);
        }
      }
        
      if (window_loc -lastScroll < -10){
        // console.log("swiping right!");
        currentLocation -= 5;
        // console.log("-----deadvanced 5 frames");
        // console.log("frame =" +currentLocation);
        // console.log('window_loc' + window_loc);
        if (currentLocation <= 0) {
            // console.log("im less than zero");
            currentLocation = 0;
             window_loc = $('body').animate({scrollLeft: 1}, 0);
        }
      }
    }
 


  //hand and instruction
  if (currentLocation > 40) {
            $(".lead").removeClass("fadeInRight animated").addClass("fadeOutLeft animated");
            $(".tutorial").removeClass("fadeInRight animated").addClass("fadeOutLeft animated");
            // $(".lead").css({"vertical-align": "middle"});
            
        } else  {
            
            $(".lead").removeClass("fadeOutLeft animated").addClass("fadeInRight animated");
            $(".tutorial").removeClass("fadeOutLeft animated").addClass("fadeInRight animated");
            // $(".row-fluid").css({"vertical-align": "bottom"});
        }

  //iphone image 
  if (currentLocation > parseInt(arr-180) && currentLocation < parseInt(arr-10)) {
            $("#one").removeClass("hidden fadeOutDown animated").addClass("fadeInUp animated");
        } else  {
            $("#one").removeClass("fadeInUp animated").addClass("fadeOutDown animated");
        }

  //First Mobile Phone Service 
  if (currentLocation > parseInt(arr*4 - 300) && currentLocation < parseInt(arr*4)) {
            $("#two").removeClass("hidden fadeOutDown animated").addClass("fadeInUp animated");
        } else  {
            $("#two").removeClass("fadeInUp animated").addClass("fadeOutDown animated");
        }


 //fixed nav
      if (currentLocation > parseInt(arr-10)) {
          $(".timeline-nav").removeClass("hidden fadeOutDown animated").addClass("fadeInUp animated");
          $(".row-fluid").css({"vertical-align": "bottom"});
      } else  {
          $(".timeline-nav").removeClass("fadeInUp animated").addClass("fadeOutDown animated");
          $(".row-fluid").css({"vertical-align": "middle"});
      }

  	//  if (currentLocation == parseInt(arr*2)){
   //   	console.log("SECOND ");
   //   	$("#two").toggleClass("hidden");
   //   	console.log("ON");
    	
   //  	} if (currentLocation == parseInt((arr*2)+20)){
   //   	console.log("OFF");
   //   	$("#two").toggleClass("hidden");



  	// } if (currentLocation == parseInt(arr*3)){
   //   	console.log("THIRD");
   //   	$("#three").toggleClass("hidden");
   //   	console.log("ON");
    	
   //  } if (currentLocation == parseInt((arr*3)+20)){
   //   	console.log("OFF");
   //   	$("#three").toggleClass("hidden");

  	// } if (currentLocation == parseInt((arr*4)-30)){
   //   	console.log("FOURTH");
   //   	$("#four").toggleClass("hidden");
   //   	console.log("ON");
    	
   //  } if (currentLocation == parseInt((arr*4)-10)){
   //   	console.log("OFF");
     	
   //   	$("#four").toggleClass("hidden");

   //    }

  

     
      

  //updating value to latest 
  lastScroll = window_loc;
	setImage(currentLocation);

	});



function setImage(newLocation) {
	context.drawImage(images[newLocation], 0, 0, canv.width, canv.height);
	console.log(images.length + "length of images");
}

});



