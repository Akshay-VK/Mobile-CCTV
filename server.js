const express = require('express');
const app = express();
const port = process.env.port || 3000;
const socket = require('socket.io');


let server = app.listen(port , () => {
	console.log("Server started at port "+port);
});

let io = socket(server);

let videos = [];

app.use('/',express.static('public'));
app.use('/serve',express.static('server'));


let counter = 0;

app.get('/new',(req,res) => {
	res.send({id:counter});
	counter++;
});

app.get('/set/:id/:data',(req,res) => {
	videos[parseInt(req.params.id)] = (req.params.data);
	console.log(videos);
	res.send({"SUCCESS":"SUCCESS"});
});


setInterval(()=>{
	io.emit('service',{data:videos});
},3000);

io.on('connection',(socket) => {
	socket.on('set',(data) => {
		let id = data.id;
		videos[id] = data.feed;
		//console.log(videos)
	});
	
	
});