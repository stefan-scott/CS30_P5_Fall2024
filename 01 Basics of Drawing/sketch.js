// Basics of Drawing
// Mr. Scott
// Sept 11. 2024
//
// 2D primitives, color, animation, mouse/keyboard events

function setup() {
  //happens once, at *very* start
  createCanvas(500, 400);  //width → width of canvas
                           //height → height of canvas 
}

function draw() {
  //when possible, try to 
  //keep draw() clean...
  background(220);
  drawCircles();
  
}

function drawCircles(){
  //contains the code to 
  //draw 5 circles
  fill(101,0,255);
  circle(0,0,50);

  fill(150,255,90) // rgb
  circle(width/2, height/2, 30);

  fill(255,0,0);
  circle(0,height,50);
  circle(width,0,50);
  circle(width,height,50);

  //draw a circle 2/3 across
  //the screen. 
  circle(width*0.66,height/2, 50);


}
