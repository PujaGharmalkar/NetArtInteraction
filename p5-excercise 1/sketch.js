// declare variables here


function setup() {
  createCanvas(500, 500);
  background(100);
  console.log(" sup internet!!!!!");

}
ellipse(mouseX, mouseY, 80, 80);
rect(mouseX - 50, mouseY - 50, 80, 80);
function setup() {
  createCanvas(500, 500);

  // set background color in grayscale:
  background(150);

  // draw ellipse
  ellipse(100, 100, 80, 80);

  // draw rectangle
  rect(100, 100, 80, 80)
}
function setup() {
	createCanvas(500, 500);
	// background is very light grey
	background(230);
}

function draw() {

	// create bright green ellipse with white stroke
	fill(0, 255, 0);
	stroke(255, 255, 255);
	ellipse(100, 100, 80, 80);

	// make transparent rectangle
	// fourth argument will define transparency
	// 125 is 50% transparency (half of 255)
	fill(255, 100, 50, 127);
	noStroke();
	rect(100, 100, 80, 80);

	// stroke color and transparency changes with mouse position
	stroke(100, 200, mouseY, mouseX);
	strokeWeight(5);
	line(100, 100, mouseX, mouseY);
}
