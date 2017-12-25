var circle = document.querySelectorAll(".circle");
var easy = document.getElementById("easy");
var hard = document.getElementById("hard");
var footer = document.getElementById("footer");
var message = document.getElementById("message");
var lengthOfCircle = 6;
var gameOver = false;

//Random Color in RGB
function randomRGB(){  
    var randomColor = 'rgb(' + (Math.floor(Math.random() * 256)) + ', ' + (Math.floor(Math.random() * 256)) + ', ' + (Math.floor(Math.random() * 256)) + ')';

    return randomColor;   
}
//Empty array of colors
var colorArray = [];

//Easy Level
easy.addEventListener('click', function(){
    console.log("easy");
    
    circle[3].style.display = "none";
    circle[4].style.display = "none";
    circle[5].style.display = "none";
    
    //console.log("easy");
    for(var i = 0; i < lengthOfCircle-3; i++){
        colorArray.push(randomRGB());
        circle[i].style.backgroundColor = colorArray[i];
    }
    
    //Create a Random number generator from 1 to 6
    var randNum = (Math.floor(Math.random() * 3));
    
     //Set number within the color colorArray
    colorArray[randNum];
    
    //Display RGB in footer
    footer.textContent = colorArray[randNum];
    console.log(colorArray[randNum]); //TESTING
    console.log(randNum);   //TESTING
    
    //Adding an event listener for each circle
    for(var i = 0; i < lengthOfCircle-3; i++){
        circle[i].addEventListener('click', function(){
            if(this.style.backgroundColor == colorArray[randNum]){
               circle[0].style.backgroundColor = this.style.backgroundColor;
               circle[1].style.backgroundColor = this.style.backgroundColor;
               circle[2].style.backgroundColor = this.style.backgroundColor;
               message.style.display = "block";
               gameReset();
            }else{
                this.style.display = "none";
            }
        });
    } 
});

//Hard Level
hard.addEventListener('click', function(){
    console.log("hard");
});



function gameReset(){ 
message.style.display = "none";

//Loop through the the circles and creates a new array of colors and then sets them to the background.
    for(var i = 0; i < lengthOfCircle; i++){
        colorArray.push(randomRGB());
        circle[i].style.backgroundColor = colorArray[i];
    } 

    //Create a Random number generator from 1 to 6
    var randNum = (Math.floor(Math.random() * 6));
    
    //Set number within the color colorArray
    colorArray[randNum];
    
    //Display RGB in footer
    footer.textContent = colorArray[randNum];
    console.log(colorArray[randNum]); //TESTING
    console.log(randNum);   //TESTING
    
    //Adding an event listener for each circle
    for(var i = 0; i < lengthOfCircle; i++){
        circle[i].addEventListener('click', function(){
            if(this.style.backgroundColor == colorArray[randNum]){
               circle[0].style.backgroundColor = this.style.backgroundColor;
               circle[1].style.backgroundColor = this.style.backgroundColor;
               circle[2].style.backgroundColor = this.style.backgroundColor;
               circle[3].style.backgroundColor = this.style.backgroundColor;
               circle[4].style.backgroundColor = this.style.backgroundColor;
               circle[5].style.backgroundColor = this.style.backgroundColor;
               message.style.display = "block";
            }else{
                this.style.display = "none";
            }
        });
    } 
}

gameReset();

    
    

    
