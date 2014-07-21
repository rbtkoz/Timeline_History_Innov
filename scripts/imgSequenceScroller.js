$( document ).ready(function() {

"use strict";

//success function simply prints to console
// function loading(img,size){
//     console.log("loading"+img);

//     if(img == size-1){
//       console.log("complete!!!!!!!!!!!");
      
//     }
// }

//loading array function
function preLoad(file,total_array,arrayme,type){
  
  for(var i = 1; i < total_array; i++) {
    var img = new Image();
  	var file_entry = file + i +type;
    console.log(file_entry);
  	img.src = file_entry;
  	arrayme.push(img);


  }
 
}

//actual preloader
// function addLoadEvent(func) {
//   var on_load = window.onload;
//   if (typeof window.onload != 'function') {
//     window.onload = func;
//   } else {
//     window.onload = function() {
//       if (on_load) {
//         on_load();
//       }
//       func();
//     }
//   }
// }

var images = new Array();
var size = 899;
var filename = 'http://t-mrkt.com/Lab/media/MASTER_COMP_';
var file_type =".png";

//call function
preLoad(filename,size,images,file_type);


var canv = document.getElementById('background');
var context = canv.getContext('2d');

$(canv)
	.width($(window).width())
	.height($(window).height());


	
  
  //this resets to beginning 0 of experience *****seems to break it needs rewrite
  // var window_loc = $('body').animate({scrollLeft: -1}, 1000);
 var currentLocation = 0;
  //variable for 1/4 proportion 
  var arr = Math.floor(images.length/4);

  var lastScroll = 0;

  var maxScrollLeft = document.getElementById('all').scrollWidth - document.getElementById('all').clientWidth;

  $(window).on('scroll', function(e) {

   

 	  var window_loc = $(this).scrollLeft();
    


    if(window_loc > lastScroll){

       if ((window_loc - lastScroll) < 10){
    	   currentLocation += 1;
        
          
      }
    	if ((window_loc - lastScroll) > 10){
    	   currentLocation += 10;
      

      }
      
    }    
   
    
    if(window_loc < lastScroll){

      if ((window_loc - lastScroll) > -10){
        currentLocation -= 1;
      
        
      }
        
      if ((window_loc -lastScroll) < -10){
       
        currentLocation -= 10;
        
      }
    }
 
    if(currentLocation < 0) {
        currentLocation = 0;
        window_loc = $('body').scrollLeft(0);
        console.log("less than zero");
      }

    if(currentLocation > images.length-1) {
          currentLocation = images.length-1;
          window_loc = $('body').scrollLeft(maxScrollLeft);
          console.log("more than full length");

      }


  //hand and instruction
  // if (currentLocation > 40) {
  //           $(".lead").removeClass("fadeInRight animated").addClass("fadeOutLeft animated");
  //           $(".tutorial").removeClass("fadeInRight animated").addClass("fadeOutLeft animated");
  //           // $(".lead").css({"vertical-align": "middle"});
            
  //       } else  {
            
  //           $(".lead").removeClass("fadeOutLeft animated").addClass("fadeInRight animated");
  //           $(".tutorial").removeClass("fadeOutLeft animated").addClass("fadeInRight animated");
  //           // $(".row-fluid").css({"vertical-align": "bottom"});
  //       }

  //iphone image 
  // if (currentLocation > parseInt(arr-180) && currentLocation < parseInt(arr-10)) {
  //           $("#one").removeClass("hidden fadeOutDown animated").addClass("fadeInUp animated");
  //       } else  {
  //           $("#one").removeClass("fadeInUp animated").addClass("fadeOutDown animated");
  //       }

  //First Mobile Phone Service 
  // if (currentLocation > parseInt(arr*4 - 40) && currentLocation < parseInt(arr*4)) {
  //           $("#two").removeClass("hidden fadeOutDown animated").addClass("fadeInUp animated");
  //       } else  {
  //           $("#two").removeClass("fadeInUp animated").addClass("fadeOutDown animated");
  //       }


 //fixed nav
      // if (currentLocation > parseInt(arr-10)) {
      //     $(".timeline-nav").removeClass("hidden fadeOutDown animated").addClass("fadeInUp animated");
      //     $(".row-fluid").css({"vertical-align": "bottom"});
      // } else  {
      //     $(".timeline-nav").removeClass("fadeInUp animated").addClass("fadeOutDown animated");
      //     $(".row-fluid").css({"vertical-align": "middle"});
      // }

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



