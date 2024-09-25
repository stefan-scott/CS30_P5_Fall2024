// State Variables
// Mr. Scott
// Sept 25, 2024

// Global Variables
let currentColor = 1;  //0, 1 , 2
let circleSize = 50;
let growing = false;  //2-state  (true/false)
let myColor;

function setup() {
  createCanvas(windowWidth, windowHeight);
  myColor = color(150, 110, 240); //3-tuple 
}

function draw() {
  background(255);

  //circle code - fill value  using SWITCH statement
  switch (currentColor) { //what is the value of currentC?
    case 0:
      fill(255, 0, 0); break;
    case 1:
      fill(myColor); break;
    case 2:
      fill(0, 255, 255); break;
  }

  //circle: change the color state (variable)

  if (frameCount % 30 === 0) { //true once each 30 frames
    //0, 1, 2, 3, 4, 5, 6, 7, 8, 9
    currentColor++;
    if (currentColor > 2) currentColor = 0;
  }

  //circle, grow/shrink
  if(growing) circleSize += 2;
  else circleSize -=2;
  
  //circle:  Actually draw it!
  circle(width / 2, height / 2, circleSize);
}

function keyPressed(){
  //called automatically when a key is pressed
  if(key === "a"){
    growing = !growing;
  }
}

