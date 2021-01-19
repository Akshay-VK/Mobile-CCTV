let socket;
let camspace;
let socketconn = false;

function setup() {

	socket = io('http://localhost:3000');

	camspace = select('#cams');

	socketconn = true;

}
function draw() {
	
if(socketconn) {
	socket.on('service',(data)=>{
		let len = data.data.length;
		let htmlCode = '';
		for(let i = 0; i< len; i++) {
			let imageHTML = `<img src="${data.data[i]}">`;
			htmlCode += imageHTML;
			//console.log('happening1');
		}
		// camspace.innerHTML = htmlCode;
		camspace.html(`${htmlCode}`);
		//console.log('happening1');
		//console.log(data.data[0]);
	});
	
}
}