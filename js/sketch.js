function setup() {
  createCanvas(windowWidth,windowHeight);
}

function draw() {
  // Set background color based on CSS value
  const bg_color = window.getComputedStyle(document.documentElement).getPropertyValue('--main-bg-color').trim();
  const blue_astro_color = window.getComputedStyle(document.documentElement).getPropertyValue('--astro-blue').trim();
  background(bg_color);

  noFill();
  strokeWeight(4);
  stroke(blue_astro_color);
  circle((windowWidth/2),(windowHeight/2),80);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
