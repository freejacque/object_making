var http = require('http');

http.createServer(function(request, response) {
  response.writeHead(200, {'Content-Type': 'text/html'});
  response.write('<b>Hello World</b>');
  response.end();
}).listen(8080);

// used to test for blocking
var a;
for (var i = 0; i < 1000000000; i += 1) {
  a = i;
}

console.log('For loop has finished');
