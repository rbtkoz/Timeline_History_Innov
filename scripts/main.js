/**
 *
 *  Web Starter Kit
 *  Copyright 2014 Google Inc. All rights reserved.
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License
 *
 */
(function () {


  // quick test for next to last element scroll
  $(function(){
      $('.mine').click(function() {
        console.log("hello")
          $.scrollTo( '#plutotxt', 1500 );
      });
  });


/* 
 * Lazy Line Painter - Path Object 
 * Generated using 'SVG to Lazy Line Converter'
 * 
 * http://lazylinepainter.info 
 * Copyright 2013, Cam O'Connell  
 *  
 */ 
 
// var pathObj = {
//     "cellphone": {
 
//         "strokepath": [
//             {
//                 "path": "M74.54,36.736c-22.123,0-40.06,17.936-40.06,40.059c0,22.125,17.937,40.061,40.06,40.061    c22.124,0,40.06-17.936,40.06-40.061C114.6,54.672,96.664,36.736,74.54,36.736z",
//                 "duration": 600
//             },
//             {
//                 "path": "   M76.33,95.215L76.33,95.215c0,1.12-0.903,2.033-2.023,2.033c-1.116,0-2.022-0.904-2.022-2.021c0-1.127,0.908-2.043,2.033-2.043   h8.935c2.279,0,4.126-1.848,4.126-4.127V63.246c0-2.279-1.847-4.127-4.126-4.127H65.828c-2.279,0-4.126,1.848-4.126,4.127v33.293   c0,2.279,1.847,4.127,4.126,4.127h17.447c2.266,0,4.103-1.838,4.103-4.104",
//                 "duration": 600
//             }
//         ],
//         "dimensions": {
//             "width": 150,
//             "height": 150
//         }
//     }
// }; 
 
/* 
 Setup and Paint your lazyline! 
 */ 
 
//  $(document).ready(function(){ 
//  $('#cellphone').lazylinepainter( 
//  {
//     "svgData": pathObj,
//     "strokeWidth": 2,
//     "strokeColor": "#e09b99"
// }).lazylinepainter('paint'); 


 // var paper = new Raphael(document.getElementById('cellphone'), 500, 500);
 //    var circle = paper.circle(100, 100, 80);
 //    for(var i = 0; i < 5; i+=1) {
 //        var multiplier = i*5;
 //        paper.circle(250 + (2*multiplier), 100 + multiplier, 50 - multiplier)
 //    }
 //    var rectangle = paper.rect(200, 200, 250, 100);
 //    rectangle.attr({fill: '#9cf', stroke: '#ddd', 'stroke-width': 5});
 //    var ellipse = paper.ellipse(200, 400, 100, 50);
 // });/* 
 // Setup and Paint your lazyline! 
 // */ 

// $(document).ready(function() {
//    var baloon = $('#Layer_1');
//      function runIt() {
//        baloon.animate({opacity:'1'}, 1000);
//        baloon.animate({opacity:'0.5'}, 1000, runIt);
//     }
//     runIt();
// });

$(document).ready(function(){
  var baloon = $('.twinkle');
  var i = 0;
  
  baloon.each(function() {
  function twinkLe(){
      
      $(baloon[i]).animate({opacity:'0.6',easing: "easeout"}, 2000);
      i=(i < baloon.length-1) ? (i+1) : 0; 

       
      $(baloon[i]).animate({opacity:'1',easing: "easein"}, 2000, twinkLe);
      i=(i < baloon.length-1) ? (i+1) : 0;   

   
     

     }  
      
  twinkLe();
  }); 

   
   
});

  // 'use strict';

  // var querySelector = document.querySelector.bind(document);

  // var navdrawerContainer = querySelector('.navdrawer-container');
  // var appbarElement = querySelector('.app-bar');
  // var menuBtn = querySelector('.menu');
  // var main = querySelector('main');

  // function closeMenu() {
  //   appbarElement.classList.remove('open');
  //   navdrawerContainer.classList.remove('open');
  // }

  // function toggleMenu() {
  //   appbarElement.classList.toggle('open');
  //   navdrawerContainer.classList.toggle('open');
  // }

  // main.addEventListener('click', closeMenu);
  // menuBtn.addEventListener('click', toggleMenu);
  // navdrawerContainer.addEventListener('click', function (event) {
  //   if (event.target.nodeName === 'A' || event.target.nodeName === 'LI') {
  //     closeMenu();
  //   }
  // });
})();
