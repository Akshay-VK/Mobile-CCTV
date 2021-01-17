var capture;
let ID;
let fc = 0;

function setup() {
	createCanvas(500,500);
	capture = createCapture(VIDEO);
	capture.size(5,5);
	capture.hide();

	loadJSON('/new',(data) => {
		ID = parseInt(data.id);
	})
}

function draw() {
	background(0);
	scale(10);
	fc++;
	image(capture,0,0,50,50);
	scale(0.1);
	loadPixels();

	let url = '/set';
	for(let x = 0; x < width; x++) {
		for(let y = 0; y < height; y++) {
			var index = 4*(y*width+x);
			if(index == 0) {
				url = url + '?arr='+pixels[index];
			}else{
				url = url + '&arr='+pixels[index];
			}
		}
	}
	if(fc % 30 == 0){
		loadJSON(url, (data) => {
			console.log('SUCCESS');
		});
	}

	updatePixels();
}