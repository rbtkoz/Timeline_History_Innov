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

var currentLocation = 0;


var currentMousePos = false;


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
var lastScroll = 0;
window.scrollX =0;
//this resets to beginning 0 of experience
var st = $('body').animate({scrollLeft: 0}, 1000);

window.addEventListener('scroll', function(e) {

	// e.preventDefault();
	// console.log(window.scrollX);

	var st = $(this).scrollLeft();
 	console.log(st +"st value")
	if (st > lastScroll){

		console.log("we are going left");
		currentLocation += 1;
		console.log("+1" +"currentLocation =" +currentLocation);


	} else {
		console.log("we are going right");
		currentLocation -= 1;
		console.log("-1"+"currentLocation =" +currentLocation);
	}
	
	if(currentLocation < 0) {
		currentLocation = 0;
	}	
	if(currentLocation > images.length) {
		currentLocation = images.length;
		console.log(images.length +"how many images");
	}
			//some css animation on specific value -test
			if (currentLocation >= 50) {
        $("p").removeClass("lead").addClass("load");
         $("i").addClass("faux");
    } else {
        $("p").addClass("lead").removeClass("load");
        $("i").removeClass("faux");
    }
    //updating value to latest 
		lastScroll = st;
		setImage(currentLocation);

});

function setImage(newLocation) {
	context.drawImage(images[newLocation], 0, 0, 1920, 1080);
}



