$(document).ready(function(){


   
// var imageUrl= "../images/sprite_History_100.png";
// $('.frame').css('background-image', 'url(' + imageUrl + ')');
var spriteArr=["url('../images/sprite_History_100.png')", "url('../images/sprite_History_100.png')", "url('../images/sprite_History_10 copy.png')", "url('../images/sprite_History_100.png')"];
var $example = $('#sprite');
$(frame).css( "background-image", spriteArr[0] );
var frame = $example.find('.frame')[0];

// var spriteElement = document.getElementById("sprite");
// $(spriteElement).css("background-image",spriteArr[0]);

var motio = new Motio(frame, {
  fps: 30,
  vertical: 1,
  frames: 100
});


$(window).swipe( {


        

        swipeStatus:function(event, phase, direction, distance, duration, fingers) {

          console.log(event.type);
          
          if (event.type==="touchstart"){
            motio.toggle();
          }

          if(direction==="left"){
             var posval = $(frame).css( "background-position-y" );
            console.log("swiped left" + distance);
            console.log(convertFrame(posval) +" frame");
            motio.play();
          }
          
          motio.on('frame', function () {
            var posval = $(frame).css( "background-position-y" );
            $(".numbers h1").text(convertFrame(posval) + " frames");
            if (posval === "-106920px"){
              motio.pause();
          }
        });
        
          if(direction === "right"){
            var posval = $(frame).css( "background-position-y" );
            console.log("swiped right" + distance);
            motio.play({reverse:1});
          }
        },

        threshold:0

});


function convertFrame(positiony){
  var frame = Math.abs(parseInt(positiony)/1080);
  return frame;
}


function plusFrame(distance, frame){
  var dist = distance/10;
  frame = frame +dist;
  console.log(frame);


}

function minusFrame(distance, frame){
 var dist = distance/10;
  frame = frame -dist;


}











// Play when mouse enters the frame, and pause when it leaves
// $example.on('mouseenter mouseleave', function (event) {
//   motio[event.type === 'mouseenter' ? 'play' : 'pause']();
//   console.log()
// });

//if previous pos is < current position
// function swipe2(event, phase, direction, distance) {
//         $(this).text( phase +" you have swiped " + distance + "px in direction:" + direction );
//       }
// $(window).on( "swiperight swipeleft", swipeHandler );

// function swipeHandler( event ){
//   if (event.type === "swiperight"){
//     console.log("swiperight");
//     // motio.play();

//     // motio.on('frame', function () {
//     //   var backval = $(frame).css( "background-position-y" );
//     //   console.log(backval);
//     //   if (backval === "-106920px"){
//     //     console.log("big number hombre");
//     //     $(frame).css( "background-image", spriteArr[2] );

//     //   }
//     // });
//   }

//   if (event.type === "swipeleft"){
//     console.log("swiperight");
//     // motio.play({reverse:1});
     
//  //    motio.on('frame', function () {
//  //      var backvalrev = $(frame).css( "background-position-y" );
//  //      console.log(backvalrev +"rev");
    
//  //        console.log("big number hombre");
//  //        $(frame).css( "background-image", spriteArr[0] );
    
//  // });
// }
   
    
   

    
  
//   }

// //swipe forward
// //background position y + 1080x5



//       //if background position y == 108000
//       //then change value of background in css
//       //by incremending 1 of the spritearray if array is less than length

// //previous pos is > current position


// //swipe backwards
// //background position y - 1080x5

//       //on the way back
//       // if array index is bigger than 0,
//       //change value of background in css
//       //by decrementing 1 of the spritearray

//       //if value is 0 

 


// // var sprite = new Motio(document.getElementById('sprite'), {
// //     vertical: 1,
// //     fps: 10, // Frames per second. More fps = higher CPU load.
// //     frames: 10 // Number of animation frames in sprite
// // });
// // sprite.play();

});
