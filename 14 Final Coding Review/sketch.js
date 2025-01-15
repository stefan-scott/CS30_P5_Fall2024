// Final Coding Practice
// Jan 15, 2025
// Mr. Scott

// Global Variables
let gorillaIdle = [];
let gorillaSwipe = [];
let idleIndex = 0;   let swipeIndex = 0;
let gorillaState = 0;  //0 → Idle   1 → Swipe

let spiralImages = [];
let spiralObjects = [];

function preload(){ //ensures loading is complete
  //Gorilla Images First   1-6
  for(let i = 1; i <= 6; i++){
    gorillaIdle.push( loadImage("assets/Gorilla/idle" + i + ".png"));
    gorillaSwipe.push( loadImage("assets/Gorilla/swipe" + i + ".png"));
  }

  //Load Circle Next:   circle00.png  00-15
  for(let i = 0; i <= 15; i++){
    if(i < 10){
      spiralImages.push( loadImage("assets/Circle/circle0"+i+".png"));
    }
    else{
      spiralImages.push( loadImage("assets/Circle/circle"+i+".png"));
    }
  }
}


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
}
