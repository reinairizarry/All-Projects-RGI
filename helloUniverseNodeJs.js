var http  = require('http');
http.server(function(req,res){
  res.writeHead(200,{"content-Type": "text/html"});
  res.write("Hello Universe");
  res.end();
}).listen(8080);
