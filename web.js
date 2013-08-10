var fs = require('fs');
var index = fs.readFileSync('index.html',"utf8",function (err, data) {
  if (err) throw err;
  console.log(data);
});

var buffer = new Buffer(index, "utf-8")

var  express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(buffer.toString('utf-8'));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});


