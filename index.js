var http = require('http');

var server = http.createServer ( function(req, res) {

  res.end("<html><body><h1>Hello NodeJS</h1></body></html>");

});

server.listen(3000, console.log('Rodando em http://localhost:3000'));
