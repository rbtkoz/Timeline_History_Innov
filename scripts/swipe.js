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




var element = document.getElementById('test_el');
    
    var hammertime = Hammer(element).on("swipeleft", function(event) {
    currentLocation += 2;
    // popcorn.currentTime(p.currentTime()+5  );
    console.log("swiping left!");
    setImage(currentLocation);
    
   

 });

var hammertime = Hammer(element).on("swiperight", function(event) {
    currentLocation --;
    // popcorn.currentTime(p.currentTime()-5  );

    console.log("swiping right!");
    setImage(currentLocation);
    
    
    });

function setImage(newLocation) {
  context.drawImage(images[newLocation], 0, 0, 1920, 1080);
  console.log(images.length + "length of images");
}