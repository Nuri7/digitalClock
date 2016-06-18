window.onload = function(){

// declare the global variables needed
    var today;
    var h;
    var m;
    var s;
    var selectedColors = ["#FCBCB8", "#CEF7A0", "#D4F2DB", "#8EF9F3"];

// run these function when page loads    
    window.setInterval(showClock, 500);
    window.setInterval(changeColorToBlackEveryMinute, 500);
    window.setInterval(changeBackgroundColorEvery5min, 500);
    window.setInterval(changeTextColorEveryHour, 500);

// display the clock on the html page
    function showClock() {
        today = new Date();
        h = today.getHours();
        m = today.getMinutes();
        s = today.getSeconds();
        h = checkTime(h);
        m = checkTime(m);
        s = checkTime(s);
        document.getElementById('div1').innerHTML = h + ":" + m + ":" + s;
    }

// Change the color to black if it is an odd minute and another color if it is even minute.
    function changeColorToBlackEveryMinute(){
        today = new Date();
        h = today.getHours();
        m = today.getMinutes();
        s = today.getSeconds();
        if(isEven(m) && s === 0){
            document.body.style.backgroundColor = "black";  
        }else if(s === 0) {
            document.body.style.backgroundColor = "orange";
        }
    }

// Change the background to a random color every 5 minutes.
    function changeBackgroundColorEvery5min(){
        today = new Date();
        h = today.getHours();
        m = today.getMinutes();
        s = today.getSeconds();
        if(isFive(m) && s === 0){
            //Change the background to a random color every 5 minutes
            var randomColor= '#'+Math.floor(Math.random()*16777215).toString(16);
            document.body.style.backgroundColor = randomColor;
        }
    }

// Change the text color to a different color of the clock every hour, selected from an array of colors.
    function changeTextColorEveryHour(){
        today = new Date();
        h = today.getHours();
        m = today.getMinutes();
        s = today.getSeconds();
        if(m === 0 && s === 0){
            document.div.style.text = selectedColors[Math.floor(Math.random() * colors.length)];
        }
    }

/***************************************************************************** 
The below function are totally unncesary because I could put them within functions
and I only use them once within the code, but I wanted to learn and play with 
creating and using functions that return a value
********************************************************************************/

//add zero in front of numbers < 10
    function checkTime(num) {
        if (num < 10) {
            num = "0" + num;
        }  
        return num;
    }

// check if number is even
    function isEven(number){
        if (number %2 === 0){
            return true;
        }
        else{
            return false;
        }
    }

// check if can be divided by 5
    function isFive(number){
        if (number %5 === 0){
            return true;
        }
        else{
            return false;
        }
    }

};


