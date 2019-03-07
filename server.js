const express = require('express');
const path = require('path');
const data = require('./data');

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'home.html'));
});
app.get('/home', function(req, res) {
  res.sendFile(path.join(__dirname, 'home.html'));
});
app.get('/tables', function(req, res) {
  res.sendFile(path.join(__dirname, 'tables.html'));
});
app.get('/reserve', function(req, res) {
  res.sendFile(path.join(__dirname, 'reserve.html'));
});

let people = [];

app.post('/api/reserve ', function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body parsing middleware
  var reserveTabel = req.body;

  // Using a RegEx Pattern to remove spaces from newCharacter
  // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
  reserveTabel.routeName = reserveTabel.name.replace(/\s+/g, '').toLowerCase();

  console.log(reserveTabel);

  people.push(reserveTabel);

  res.json(reserveTabel);
});

app.listen(PORT, function() {
  console.log('App listening on PORT ' + PORT);
});
