
var x = [];
var y = [];
var r = [];

function setup() {
  createCanvas(400, 400);
  
  for (var i = 0; i < 100; i++){
    y[i] = 290 + i;
    x[i] = 210 + i;
		r[i] = 0;
  }
}
  
function draw() {
  background(0);
  noStroke();

  // draw smokestack
  fill(255);
  rect(195, height, 30, -100);

  
  for (var i = 0; i < 100; i++){
    // save graphics state
 		push();
    // darker as it gets closer to 0
    fill(y[i]);
    // rotate r around (x,y)
    translate(x[i], y[i]);
    rotate(r[i]);
    //draw rectangle
    rect(-10, -10, 20, 20);
  	// reset rotation and translation
 		pop();
    // up 3 pixels
  	y[i] -= 3;
		x[i] -=1;
  
		// rotate 0.05 radians ~= 2.8 degrees per frame
  	r[i] += 0.05
  
  	// if reach past the top a bunch
  	if (y[i] < -150) {
    		y[i] = 290;
			  x[i] = 210;
  	}
  }
  
  
}
