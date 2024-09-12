// Coordinate Systems
// Mr. Scott
// Sept 11. 2024
// Looking at how coordinates work in p5.js


function setup() {
  print("Setup runs once, at the start.")
  createCanvas(500, 800);
  //         width   height
}

function draw() {
  //runs over and over (targetting 60fps)
  //when possible, keep draw() short
  background(220);
  drawCircles();
  
}

function drawCircles(){
  //draw some (5) circles
  fill(100,200,255);  //R, G, B
  circle(0,0,50);

  fill(204,102,0);
  circle(100,-20,50);

  circle(500,0,50); 
  circle(width,height,50);
  circle(width/2, height/2, 100);
}










