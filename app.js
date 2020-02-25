var express = require('express');
var app = express();



// set the template engine
app.set('view engine', 'pug');


// set the static folder
app.use(express.static('public'));
app.use(express.static('dist'));


// bind the main url
app.get('/', function (req, res) {

  // return the missing minutes
  res.render('index', { 
    info: 'minutes missing to clap your hands to welcome the weekend :-)',
    title: 'Clap 4 weekend'
  });


});


// start the process
var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});