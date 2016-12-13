var express = require('express');
var msg = require('./modTesteString');

var app = express();

app.get('/', function(req, res) {
  res.send('Olá Express!');
});

app.listen(3000, function() {
  console.log('Rodando em http://localhost:3000 com Express');
  console.log(msg());
});
