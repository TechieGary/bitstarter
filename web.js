var fs = require("fs");
var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var buf = new Buffer(100);
  fs.readFile('./index.html', function (err, buf) {
  if (err) throw err;
  response.send(buf.toString('utf8', 0, buf.length));
}); 
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
