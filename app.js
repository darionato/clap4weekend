var express = require('express');
var app = express();



// set the template engine
app.set('view engine', 'pug');


// bind the main url
app.get('/', function (req, res) {


  // require the countdown library
  let c = require('./countdown/countdown.js');

  // create a new instance
  let r = new c.Countdown();

  // return the missing minutes
  res.render('index', { 
    counter: r.getCountdown(),
    info: 'minute missing to clap your hands for weekend',
    title: 'Clap 4 weekend'
  });


});


// start the process
var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});