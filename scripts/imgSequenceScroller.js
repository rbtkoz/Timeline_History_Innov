var totalImages = 298;
var images = new Array();
for(var i = 1; i < totalImages; i++) {
	var filename = 'http://t-mrkt.com/Lab/media/LabLobbyTest_'; // Filename of each image
	filename += i + '.png';
	var img = new Image;
	img.src = filename;
	images.push(img);
}

var canv = document.getElementById('background');
var context = canv.getContext('2d');
$(canv)
	.width($(window).width())
	.height($(window).height());


// var currentMousePos = false;
// $(document).on("scrollLeft", function() {
// 	console.log($("body").scrollLeft());
// 	currentMousePos = scrollLeft();
// 	console.log("hello here");
// 	console.log(currentMousePos);
// 	currentLocation =  Math.floor(
// 		(images.length / $(window).width()) *
// 		currentMousePos
// 	);
// 	setImage(currentLocation);
// 	console.log(currentLocation);
// });

// window.addEventListener("scroll", function(e){
// 	e.preventDefault();
// 	console.log(window.scrollX);
// })
// window.addEventListener('mousewheel', function(e) {
// 	// e.preventDefault();
// 	console.log(e.wheelDelta);
// 	var delta = Math.max(-1, Math.min(1, e.wheelDelta));
// 	if(delta == -1) currentLocation += 1;
// 	if(delta == 1) currentLocation -= 1;
// 	if(currentLocation < 0) currentLocation = 0;
// 	if(currentLocation > images.length) currentLocation = images.length;
// 	setImage(currentLocation);
// });


	var currentLocation = 0;

$(document).mousemove(function( event ) {

	var mouseX = event.pageX;

 	console.log(mouseX);

	// e.preventDefault();
	// console.log(window.scrollX);
	// var st = $('body').animate({scrollLeft: incrementer}, 1000);

	// var lastScroll = 0;

	currentLocation = mouseX/2;
	

 // 	console.log(mouseX +"mouseX value")
	// if (mouseX > lastScroll){

	// 	console.log("swiping left!");
	// 	currentLocation += 2;
	// 	console.log("+1" +"currentLocation = " +currentLocation);


 // 	} if (mouseX < lastScroll ){
	// 	console.log("swiping right!");
	// 	currentLocation -= 2;
	// 	console.log("-1"+"currentLocation =" +currentLocation);

	// } if (currentLocation < 0) {
	// 	console.log("im less than zero");
	// 	currentLocation = 0;

	// }
	// } if (currentLocation == parseInt(arr)){
 //   	console.log("FIRST ");
 //   	$("#one").toggleClass("hidden");
 //   	console.log("ON");
  	
 //  	} if ( currentLocation == parseInt(arr+20)){
 //   	console.log("OFF");
   	
 //   	$("#one").toggleClass("hidden");



	// } if (currentLocation == parseInt(arr*2)){
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

	// } if (currentLocation < Math.floor(arr+30)){
 //   	console.log("FIRST ");
   	
 //   	$("#one").removeClass('animated fadeOut').addClass("hidden");
 //   	console.log("ADDDEDDEDEDEDEDDEDERFHGRTJHGSHTBSETHERBHWEH");


 //  } if (currentLocation > arr *2 && currentLocation < (arr *2)+20){
 //   	console.log("SECOND ADDED");
 //   	$("#one").toggleClass('hidden');
 //   	$("#two").removeClass('hidden').addClass('animated fadeInDown');
   
 //   	} if (currentLocation > arr *3 && currentLocation < (arr *2)+20){
 //   	console.log("THIRD");
 //   	$("#two").addClass('hidden');
 //   	$("#three").removeClass('hidden').addClass('animated fadeInDown');
   
 //   	} if (currentLocation > (images.length-20) && currentLocation < images.length){
 //   	console.log("FOURTH");
 //   	$("#three").addClass('hidden');
 //   	$("#four").removeClass('hidden').addClass('animated fadeInDown');
   
  
	// }	if (currentLocation > images.length-1) {
	// 	console.log( 'i am too much');
	// 	currentLocation = images.length-1;
	// 	console.log("-1"+"currentLocation =" +currentLocation);
	// 	console.log(images.length +"how many images");
	// }
	// 		//some css animation on specific value -test
	// 		if (currentLocation >= 50) {
 //        $("p").removeClass("lead").addClass("load");
 //         $("i").addClass("faux");
 //    } else  {
 //        $("p").addClass("lead").removeClass("load");
 //        $("i").removeClass("faux");
 //    }
    //updating value to latest 
		// lastScroll = mouseX;
		setImage(currentLocation);

});

function setImage(newLocation) {
	context.drawImage(images[newLocation], 0, 0, 1920, 1080);
	console.log(images.length + "length of images");
}



