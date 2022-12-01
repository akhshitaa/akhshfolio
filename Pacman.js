var radius = 40;
var x = 110;
var speed = 5;
var direction = 1;
function setup() {
createCanvas(1280, 570);
ellipseMode(RADIUS);
  frameRate(20)
  
}
function draw() {
background(0);
x += speed * direction;
if ((x > width-radius) || (x < radius)) {
direction = -direction; // Flip direction
}
if (direction == 1) {
arc(x, 60, radius, radius,0.52, 5.76); // Face right
} else {
arc(x, 60, radius, radius, 3.67, 8.9); // Face left
}
  for(let i=0;i<9;i++){
    arc(x, 60, radius, radius, x, 0);
  }
  for(let i=0;i<9;i++){
    arc(x, 60, radius, radius, x, 0);
  }
}