

// var imageUrl= "../images/sprite_History_100.png";
// $('.frame').css('background-image', 'url(' + imageUrl + ')');
var spriteArr=["url('../images/sprite_History_100.png')", "url('../images/sprite_History_100.png')", "url('../images/sprite_History_10 copy.png')", "url('../images/sprite_History_100.png')"];
var $example = $('#sprite');
$(frame).css( "background-image", spriteArr[0] );
var frame = $example.find('.frame')[0];

var motio = new Motio(frame, {
  fps: 60,
  vertical: 1,
  frames: 100
});

// Play when mouse enters the frame, and pause when it leaves
// $example.on('mouseenter mouseleave', function (event) {
//   motio[event.type === 'mouseenter' ? 'play' : 'pause']();
//   console.log()
// });

  var lastScroll = 0;
//if previous pos is < current position

$(window).on( "swiperight swipeleft", swipeHandler );

function swipeHandler( event ){
  motio[event.type === 'swiperight' ? 'play' : 'pause']();
    console.log('swipe');
    motio.on('frame', function () {
      var backval = $(frame).css( "background-position-y" );
      console.log(backval);
      if (backval === "-106920px"){
        console.log("big number hombre");
        $(frame).css( "background-image", spriteArr[2] );
          
      }


    });
  
  }

//swipe forward
//background position y + 1080x5



      //if background position y == 108000
      //then change value of background in css
      //by incremending 1 of the spritearray if array is less than length

//previous pos is > current position


//swipe backwards
//background position y - 1080x5

      //on the way back
      // if array index is bigger than 0,
      //change value of background in css
      //by decrementing 1 of the spritearray

      //if value is 0 

 


// var sprite = new Motio(document.getElementById('sprite'), {
//     vertical: 1,
//     fps: 10, // Frames per second. More fps = higher CPU load.
//     frames: 10 // Number of animation frames in sprite
// });
// sprite.play();