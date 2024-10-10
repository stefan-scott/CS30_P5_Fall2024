// Project Title
// Your Name
// Date

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  //top row
  for(let x = 0; x <= width; x+= 40){
    circle(x,0,20);
    line(x,0,mouseX, mouseY);
  }

}
