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

app.get('/set/:id/:data',(req,res) => {
	videos[parseInt(req.params.id)] = (req.params.data);
	console.log(videos);
	res.send({"SUCCESS":"SUCCESS"});
});

app.listen(port , () => {
	console.log("Server started at port "+port);
});