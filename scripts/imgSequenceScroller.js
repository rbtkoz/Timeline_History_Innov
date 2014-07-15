$( document ).ready(function() {

var totalImages = 899;
// var totalImages=299;

var images = new Array();
for(var i = 1; i < totalImages; i++) {
	var filename = 'http://t-mrkt.com/Lab/media/MASTER_COMP_'; // Filename of each image
  // var filename = 'http://t-mrkt.com/Lab/media/MASTERCOMP_'; // Filename of each image

	filename += i + '.jpg';
	var img = new Image;
	img.src = filename;
	images.push(img);
}

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
    		console.log("swiping left!");
    		currentLocation += 1;
        console.log("+advanced 1 frame");
        console.log("frame = " +currentLocation);
        console.log('window_loc' + window_loc);
          
          if (currentLocation >= images.length-1) {
            console.log("im less than zero");
            currentLocation = images.length-1;
            window_loc = $('body').animate({scrollLeft: maxScrollLeft}, 0);

          }
      }
    	if (window_loc - lastScroll > 10){
    		console.log("swiping right!");
    		currentLocation += 5;
        console.log("+++++advanced 5 frames");
    		console.log("frame =" +currentLocation);
        console.log('window_loc' + window_loc);

          if (currentLocation >= images.length-1) {
            console.log("im less than zero");
            currentLocation = images.length-1;
            window_loc = $('body').animate({scrollLeft: maxScrollLeft}, 0);


          }
      }
    }
    
    if(window_loc< lastScroll){
      
      if (window_loc - lastScroll > -10){
        console.log("swiping left!");
        currentLocation -= 1;
        console.log("- deadvanced 1 frame");

        console.log("frame = " +currentLocation);
        console.log('window_loc' + window_loc);

        if (currentLocation <= 0) {
            console.log("im less than zero");
            currentLocation = 0;
             window_loc = $('body').animate({scrollLeft: 1}, 0);
        }
      }
        
      if (window_loc -lastScroll< -10){
        console.log("swiping right!");
        currentLocation -= 5;
        console.log("-----deadvanced 5 frames");
        console.log("frame =" +currentLocation);
        console.log('window_loc' + window_loc);
        if (currentLocation <= 0) {
            console.log("im less than zero");
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
            $("#one").css({"vertical-align": "bottom"});
        } else  {
            $("#one").removeClass("fadeInUp animated").addClass("fadeOutDown animated");
            $("#one").css({"vertical-align": "middle"});
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



