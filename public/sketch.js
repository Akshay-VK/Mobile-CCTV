var capture;

function setup() {
	createCanvas(500,500);
	capture = createCapture(VIDEO);
	capture.size(500,500);
	capture.hide();
}

function draw() {
	background(0);
	image(capture,0,0,500,500);
}