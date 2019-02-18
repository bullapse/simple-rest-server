var express = require('express');
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.json());

app.post('/data', function (req, res) {
	console.log(req.body);
	res.status(200);
	res.send();
})

var server = app.listen(42855, function () {
	   var host = server.address().address
	   var port = server.address().port
	   console.log("Example app listening at http://%s:%s", host, port)
})
