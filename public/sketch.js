let ID;
let socket;

function setup() {

	socket = io('http://localhost:3000');

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

setInterval(() => {
	Webcam.snap(function(data_uri) {
		
		socket.emit('set',{id:ID,feed:data_uri});
	})
},3000);
