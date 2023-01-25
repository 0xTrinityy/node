const express = require('express')
const app = express()
const req = require("express/lib/request")
const res = require("express/lib/response")
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello Wolrd!')
})

app.get('/hello', (req, res) => {
	let name = req.query.name;
	if (name){
		res.send(`Hello ${name}!`);
	}
	else {
		res.send(`what is ur name ?`);
	}
});

app.listen(port, () => {
  console.log(`app listening on port 3000`)
})