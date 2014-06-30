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

/*
var currentMousePos = false;
window.addEventListener('mousemove', function(e) {
	currentMousePos = e.x;
	currentLocation = Math.floor(
		(images.length / $(window).width()) *
		currentMousePos
	);
	setImage(currentLocation);
});
*/

window.addEventListener('mousewheel', function(e) {
	// e.preventDefault();
	console.log(e.wheelDelta);
	var delta = Math.max(-1, Math.min(1, e.wheelDelta));
	if(delta == -1) currentLocation += 1;
	if(delta == 1) currentLocation -= 1;
	if(currentLocation < 0) currentLocation = 0;
	if(currentLocation > images.length) currentLocation = images.length;
	setImage(currentLocation);
});

function setImage(newLocation) {
	context.drawImage(images[newLocation], 0, 0, 1920, 1080);
}



