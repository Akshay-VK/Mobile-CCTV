// var capture;
// let ID;
// let fc = 0;

// function setup() {
// 	createCanvas(500,500);
// 	capture = createCapture(VIDEO);
// 	capture.size(5,5);
// 	capture.hide();

// 	loadJSON('/new',(data) => {
// 		ID = parseInt(data.id);
// 	})
// }

// function draw() {
// 	background(0);
// 	scale(10);
// 	fc++;
// 	image(capture,0,0,50,50);
// 	scale(0.1);
// 	loadPixels();

// 	let url = '/set';
// 	for(let x = 0; x < width; x++) {
// 		for(let y = 0; y < height; y++) {
// 			var index = 4*(y*width+x);
// 			if(index == 0) {
// 				url = url + '?arr='+pixels[index]+'&arr='+pixels[index+1]+'&arr='+pixels[index+2]+'&arr='+pixels[index+3];
// 			}else{
// 				url = url + '&arr='+pixels[index]+'&arr='+pixels[index+1]+'&arr='+pixels[index+2]+'&arr='+pixels[index+3];
// 			}
// 		}
// 	}
// 	if(fc % 30 == 0){
// 		loadJSON(url, (data) => {
// 			console.log('SUCCESS');
// 		});
// 	}

// 	updatePixels();
// }
let id = 0;
fetch('/new')
.then(data=>{return data.json()})
.then(res => {id = res.id});

Webcam.set({
	width:320,
	height:240,
	image_format: 'jpeg',
	jpeg_quality: 80
});
Webcam.attach( '#my_cam');

setInterval(() => {
	Webcam.snap( function(data_uri) {
		// display results in page
		// document.getElementById('results').innerHTML = 
		// '<img src="'+data_uri+'"/>';
		//console.log(`${data_uri}`);
		let url = `/set/${id}/${data_uri.toString()}`;
		fetch(url)
		.then(data=>{return data.json})
		.then(res=>{console.log(res)});
	});
},1000);