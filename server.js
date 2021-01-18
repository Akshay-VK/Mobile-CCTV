const express = require('express');
const app = express();
const port = process.env.port || 3000;

let videos = [];

app.use(express.static('public'));

const server = app.listen(port , () => {
	console.log("Server started at port "+port);
});

let counter = 0;

const socket = require('socket.io');
const io = socket(server);

io.on('connection',(socket) => {
	socket.on('feed',(data,pid) => {
		videos[pid] = data.feed;
		console.log("SUCCESS");
	});
});

app.get('/new',(req,res) => {
	res.send({id:counter});
	counter++;
});

// app.get('/set',(req,res) => {
// 	let videofeed = req.query.arr;
// 	for(let i = 0;i < videofeed.length; i++) {
// 		videofeed[i] = parseInt(videofeed[i]);
// 	}
// 	videos.push(videofeed);
// 	console.log(videos);
// 	res.send({"SUCCESS":"SUCCESS"});
// });

