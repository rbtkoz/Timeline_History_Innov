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


// animation fade for each eleemnt
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

// line paiting
 
/* 
 * Lazy Line Painter - Path Object 
 * Generated using 'SVG to Lazy Line Converter'
 * 
 * http://lazylinepainter.info 
 * Copyright 2013, Cam O'Connell  
 *  
 */ 
 
var pathObj = {
    "cellphone_line": {
        "strokepath": [
            // {
            //     "path": "M41.06,1C18.937,1,1,18.936,1,41.059c0,22.125,17.937,40.061,40.06,40.061    c22.124,0,40.06-17.936,40.06-40.061C81.119,18.936,63.183,1,41.06,1z",
            //     "duration": 600
            // },
            {
                "path": "   M42.849,59.479L42.849,59.479c0,1.121-0.903,2.033-2.023,2.033c-1.116,0-2.022-0.904-2.022-2.021c0-1.127,0.908-2.043,2.033-2.043   h8.935c2.279,0,4.126-1.848,4.126-4.127V27.51c0-2.279-1.847-4.127-4.126-4.127H32.348c-2.279,0-4.126,1.848-4.126,4.127v33.293   c0,2.279,1.847,4.127,4.126,4.127h17.447c2.266,0,4.103-1.838,4.103-4.104",
                "duration": 6000
            }
        ],
        "dimensions": {
            "width": 82,
            "height": 82
        }
    }
}; 
 
 
/* 
 Setup and Paint your lazyline! 
 */ 
 
 $(document).ready(function(){ 
 $('#cellphone_line').lazylinepainter( 
 {
    "svgData": pathObj,
    "strokeWidth": 5,
    "strokeColor": "white"
}).lazylinepainter('paint'); 
 });

//end animatiion
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
