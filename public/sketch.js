let ID;

function setup() {
	loadJSON('/new',(data) => {
		ID = parseInt(data.id);
	});
		
	Webcam.set({
		width:320,
		height:240,
		image_format: 'jpeg',
		jpeg_quality: 80
	});
	Webcam.attach( '#my_cam');
}

function draw() {
	
}


// setInterval(() => {
// 	Webcam.snap( function(data_uri) {
// 		// display results in page
// 		// document.getElementById('results').innerHTML = 
// 		// '<img src="'+data_uri+'"/>';
// 		//console.log(`${data_uri}`);
// 		let url = `/set/${ID}/${data_uri.toString()}`;
// 		fetch(url)
// 		.then(data=>{return data.json})
// 		.then(res=>{console.log(res)});
// 	});
// },1000);