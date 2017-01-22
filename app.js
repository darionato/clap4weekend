var express = require('express');
var app = express();

app.get('/', function (req, res) {


  let c = require('./countdown/countdown.js');

  let r = new c.Countdown();

  res.send(`Hello World! ${r.getCountdown()}`);


});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});