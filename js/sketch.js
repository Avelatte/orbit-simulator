const bg_color = window.getComputedStyle(document.documentElement).getPropertyValue('--main-bg-color').trim();
const blue_astro_color = window.getComputedStyle(document.documentElement).getPropertyValue('--astro-blue').trim();

// Array os celestial bodies
let bodies = [];

function setup() {
  createCanvas(windowWidth,windowHeight);
}

function draw() {
  background(bg_color);

  noFill();
  strokeWeight(4);
  stroke(blue_astro_color);
  circle((windowWidth/2),(windowHeight/2),75);
}

function mousePressed() {
let new_body = {
    type: 'circle',
    x: mouseX,
    y: mouseY,
    size: 30,
    color: color(blue_astro_color)
  };
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
