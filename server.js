const express = require('express');
const path = require('path');
let data = require('./data');

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
// app.get('/api/reserve', function(req, res) {
//   res.sendFile(path.join(__dirname, '.html'));
// });


<<<<<<< HEAD
app.post("/api/reserve", function(req, res) {
=======
app.post('/api/reserve ', function(req, res) {
>>>>>>> 3e997a4898d15118469e8b86e492f05c4191d446
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body parsing middleware
  var reserveTable = req.body;

  // Using a RegEx Pattern to remove spaces from newCharacter
  // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
<<<<<<< HEAD
  reserveTable .routeName = reserveTable.name.replace(/\s+/g, "").toLowerCase();
=======
  reserveTabel.routeName = reserveTabel.name.replace(/\s+/g, '').toLowerCase();
>>>>>>> 3e997a4898d15118469e8b86e492f05c4191d446

  console.log(reserveTable);

<<<<<<< HEAD
data.reservation.push(reserveTable);
=======
  people.push(reserveTabel);
>>>>>>> 3e997a4898d15118469e8b86e492f05c4191d446

  res.json(reserveTable);
});

app.listen(PORT, function() {
  console.log('App listening on PORT ' + PORT);
});
<<<<<<< HEAD




=======
>>>>>>> 3e997a4898d15118469e8b86e492f05c4191d446
