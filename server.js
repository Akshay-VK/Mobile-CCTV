const express = require('express');
const app = express();
const port = process.env.port || 3000;

let videos = [];

app.use(express.static('public'));

let counter = 0;

app.get('/new',(req,res) => {
	res.send({id:counter});
	counter++;
});

app.get('/set',(req,res) => {
	let videofeed = req.params.arr;
	for(let i = 0;i < videofeed.length; i++) {
		videofeed[i] = parseInt(videofeed[i]);
	}
	videos.push(videofeed);
	console.log(videos);
});

app.listen(port , () => {
	console.log("Server started at port "+port);
});