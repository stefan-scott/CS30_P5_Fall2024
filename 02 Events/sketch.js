// Events (Mouse/Keyboard)
// Stefan
// Sept.12.2024

//Global Variable Scope
let tSize = 40;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  
  // if(mouseIsPressed) tSize = random(20,80);
  


  fill(255,0,0);
  circle(width/2, height/2, 100);

  fill(0,255,0);
  square(width/2, height/2, 50);

  fill(0);
  textSize(tSize);
  let position = mouseX + ", " + mouseY;
  text(position, mouseX, mouseY);
}

function mousePressed(){
  //This is called AUTOMATICALLY...
  tSize = random(20, 200);
}

