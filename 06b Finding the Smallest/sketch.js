// Finding Min/Max
// Mr. Scott
// Oct 3, 2024

const NUM_CIRCLES = 40;  
let seed;  //to stabilize random numbers...

function setup() {
  createCanvas(windowWidth, windowHeight);
  seed = random(100);
}

function draw() {
  randomSeed(seed);
  background(220);
  drawCircles();
}

function drawCircles(){
  // draw NUM_CIRCLES circles on the screen
  // with random x,y, and diameter. Fill smallest one red.
  noFill();
  let smallest = Infinity;  //dummy value
  let smallX = 0;
  let smallY = 0;
  for(let i = 0; i<NUM_CIRCLES; i++){ //repeat 40
    let x = random(0,width);
    let y = random(0, height);
    let d = random(20,60); //45  52 25  21
    if(d < smallest){ //is current circle "new smallest"?
      smallest = d;  //45  25
      smallX = x;    smallY = y;
    }
    circle(x,y,d);
  }
  fill(255,0,0);
  circle(smallX, smallY, smallest);
  text(smallest, width/2, height/2);
  
}

