var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) 
{
  var fs = require('fs');
  var index = fs.readFileSync('./index.html', 'utf-8');
  var indexBuffer = new Buffer(index);

  response.send(indexBuffer.toString("utf-8", 1, 28));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
