var x = 230;
var y = 60;
var yy = 60;
var yyy = 60;

function setup() {
  createCanvas(400, 400);
  colorMode(HSB)
	 for (var i = 0; i < 100; i = i + 1) {
    x[i] = random(0, width);
    y[i] = random(0, height);
  }
}
  
function draw() {
  background(0);
  noStroke();

  // draw pipe
  rect(0, 50, 230, 20);
  
  // draw drip
  var e1 = ellipse(230, y, 10);
	var e2 = ellipse(230, yy, 10);
	var e3 = ellipse(230, yyy, 10);
	
  
  // down 3 pixels each frame, but maybe should be accelerating?
  y = y + random(0,3);
	yy = yy + random(4,7);
  yyy = yyy + random(8,10);

  
  // if invisible for a full “height” amount…
  if (y > height*2) {
    // reset
     y = 60;
  } else if (yy > height*2) {
    // reset
	  yy = 60;
	} else if (yyy > height*2) {
    // reset
	  yyy = 60;
	}
}
