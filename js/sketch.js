const bg_color = window.getComputedStyle(document.documentElement).getPropertyValue('--main-bg-color').trim();
const blue_astro_color = window.getComputedStyle(document.documentElement).getPropertyValue('--astro-blue').trim();

// Array of celestial bodies
let bodies = [];

function setup() {
  createCanvas(windowWidth,windowHeight);
  angleMode(DEGREES);
}

function draw() {
  background(bg_color);

  noFill();
  strokeWeight(4);
  stroke(blue_astro_color);
  //circle((width/2),(height/2),75);
  circle(500, 500, 75);

  // Draw every body in the bodies array
  for (let body of bodies){
    let gravity = add_gravity(body.x, body.y, 500, 500, 1);

    // Moving section
    body.x += gravity[0];
    body.y += gravity[1];

    // Rendering section
    let x = body.x;
    let y = body.y;
    let size = body.size;
    stroke(body.color);
    circle(x, y, size);
  }
}

function mousePressed() {
  bodies.push(new Body(mouseX, mouseY, 30, blue_astro_color));
}

class Body {
  constructor(x, y, size, color, spd){
    this.x = x;
    this.y = y;
    this.size = size;
    this.color = color;
  }
}

function add_gravity(x1, y1, x2, y2, grav) {
  let v1 = createVector(x1, y1);
  let v2 = createVector(x2, y2);
  let angle = atan2(v2.y - v1.y, v2.x - v1.x);
  let gravX = grav * cos(angle);
  let gravY = grav * sin(angle);
  return [gravX, gravY];
}
