//called by device orientation listener - contains information about the change in orientation (stored as argument "e")
oriented = function(e) {
        heading = e.webkitCompassHeading;
        alpha = e.alpha;
        if(e.webkitCompassHeading) {
            compassHeading = e.webkitCompassHeading;
        }   else  { 
            compassHeading = e.alpha;
        }
        

        if(compassHeading > 315 || compassHeading < 10) {
                text_area.textContent = "Welcome!";
        }

        if(compassHeading >= 10 && compassHeading < 30) {
                text_area.textContent = "Instructions:";
        }

        if(compassHeading >= 30 && compassHeading < 45) {
                text_area.textContent = "1:";
        }

        if(compassHeading >= 45 && compassHeading < 75) {
                text_area.textContent = "go to google streetview.";
        }

        if(compassHeading >= 75 && compassHeading < 95) {
                text_area.textContent = "2:";
        }

        if(compassHeading >= 95 && compassHeading < 105) {
                text_area.textContent = "find your location.";
        }

        if(compassHeading >= 105 && compassHeading < 125) {
                text_area.textContent = "3:";
        }

        if(compassHeading >= 125 && compassHeading < 145) {
                text_area.textContent = "explore ";
        }

        if(compassHeading >= 145 && compassHeading < 165) {
                text_area.textContent = "any ";
        }

        if(compassHeading >= 165 && compassHeading < 190) {
                text_area.textContent = "of";
        }

        if(compassHeading >= 190 && compassHeading < 225) {
                text_area.textContent = "the";
        }


        if(compassHeading >= 225 && compassHeading < 265) {
                text_area.textContent = "four";
        }

        if(compassHeading >= 265 && compassHeading < 315) {
                text_area.textContent = "realities";
        }

         //text_area.textContent = compassHeading;
        //calls function to alter content based on heading
       // myOrientation();
    }

//device orientation that can track orientation on space
	window.addEventListener('deviceorientation', oriented, false);
    


//find the tag on the html page to put text into
var text_area = document.getElementById("compass_content");


    function myOrientation(){
     
            text_area.textContent = "empty compass";
        
	}


