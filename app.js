var app = require('./config/server');

var msg = require('./modTesteString');

app.get('/', function(req, res) {
  res.send(msg());
});

app.listen(3000, function() {
  console.log('Rodando em http://localhost:3000 com Express');
});
