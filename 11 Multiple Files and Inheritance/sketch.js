// Multiples Files and Inheritance
// Mr. Scott
// Dec 6th, 2022

let objects = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  for (let o of objects){
    o.move();
    o.display();
  }
}
