var http =require("http");
var fs = require("fs");

var server = http.createServer(function(req, res) {
  res.writeHead(200, {"Content-Type" : "text/html"});
  if(req.url == "/") {
    fs.readFile("./index.html", function(err, html) {
      res.end(html);
    });
  } else {
    fs.readFile("./404.html", function(err, html) {
      res.end(html);
    });
  }
});

server.listen(3000, function() {
  console.log("Servidor web no ar!");
});
