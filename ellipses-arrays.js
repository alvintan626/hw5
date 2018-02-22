var x1 = 100;
var y1 = 200;
var d1 = 100;

var x2 = 300;
var y2 = 200;
var d2 = 30;
var d3 = 200;

var colors = ['red','orange','yellow','green','blue','indigo','violet','red','orange','yellow']
var words = ['Look, I am a growing ellipse!']

function setup() {
  createCanvas(400, 400);
  colorMode(HSB)
}
  
function draw() {
  background(255);
  noStroke();

  // green
	for (var i = 0; i <10; i++) {
  fill(120, 60, 100);
  ellipse(i*30+30, y1, d1);
	}
  
	//red
	for (var i = 0; i <10; i++) {
  fill('red');
  ellipse(i*35+30, i*30+30, d1);
	}
	
	//rainbow
	for (var i = 0; i <10; i++) {
  fill(colors[i]);
  ellipse(200, i*30+50, d2);
	}
	
	//black
	for (var i = 0; i <10; i++) {
  fill(0);
  ellipse(330-i*35+30, i*30+30, d1);
	}
	
	//blue
  fill(240, 60, 100);
  ellipse(x2, y2, d3);
	
	//text
	fill(150,200,10);
	textSize(d3);
	text(words[0],20,350);
	
	//inverted rainbow
	for (var i = 9; i > 0; i=i-1) {
  fill(colors[i]);
  ellipse(i*30+50, 370, d2);
	}
  
  // 1% of the time,
  if (random() < 0.01) {
    // random diameter between 10 and 400
    d1 = random(10, 50);
  }
  
  // 5% of the time…
  if (random() < .05) {
    // random diameter between 10 and 400
    d2 = random(10, 50);
  }
	//10%
	 if (random() < 0.1) {
    // random diameter between 10 and 400
    d3 = random(10, 50);
  }
	
}
