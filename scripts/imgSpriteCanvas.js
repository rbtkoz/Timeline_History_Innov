 // screen size variables
        // var SCREEN_WIDTH = window.innerWidth,
        // SCREEN_HEIGHT = window.innerHeight;        
         
          var canvas = document.createElement('canvas');
          var c = canvas.getContext('2d');
          
        canvas.width = 1920;
        canvas.height = 1080;
        
        var xpos=0, 
            ypos=0, 
            index=0, 
            numFrames = 100, 
            frameSize1= 1920,
            frameSize2=1080;
         
          // Add our drawing canvas
          document.body.appendChild(canvas); 

           //load the image
        image = new Image();
        image.src = "images/sprite_History_100.png";
        
        image.onload = function() {
        
            //we're ready for the loop
            setInterval(loop, 1000 / 30);
        }
               
    
        function loop() {
            //clear the canvas!
            c.clearRect(0,0, 1920,1080);
            
            /*our big long list of arguments below equates to: 
                1: our image source
                2 - 5: the rectangle in the source image of what we want to draw
                6 - 9: the  rectangle of our canvas that we are drawing into
                
                the area of the source image we are drawing from will change each time loop() is called.
                the rectangle of our canvas that we are drawing into however, will not. 
                tricky!
            */
            c.drawImage(image,xpos,ypos,frameSize1,frameSize2,0,0,1920, 1080);
            
            //each time around we add the frame size to our xpos, moving along the source image
            xpos += frameSize2;
            //increase the index so we know which frame of our animation we are currently on
            index += 1;
            
            //if our index is higher than our total number of frames, we're at the end and better start over
            if (index >= numFrames) {
                xpos =0;
                ypos =0;
                index=0;    
            //if we've gotten to the limit of our source image's width, we need to move down one row of frames                
            } else if (xpos + frameSize1 > image.width){
                xpos =0;
                ypos += frameSize2;
            }
            
            
        }