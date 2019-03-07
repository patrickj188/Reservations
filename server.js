const express = require('express');
const data = require('./data');

const app = express();
const PORT = 3000;

app.get('/home', function(req, res) {
  res.sendFile(path.join(__dirname, 'home.html'));
});
app.get('/tables', function(req, res) {
  res.sendFile(path.join(__dirname, 'tables.html'));
});
app.get('/reserve', function(req, res) {
  res.sendFile(path.join(__dirname, 'reserve.html'));
});

app.post('');

app.listen(PORT, function() {
  console.log('App listening on PORT ' + PORT);
});
