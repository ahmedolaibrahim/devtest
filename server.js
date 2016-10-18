/**
 * Main application file
**/

// Setup server
var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

//serve up the index.html file 

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/public/index.html'));
});

// Start up the server on either port 3000 or detected environment port
app.listen(process.env.PORT || 3000 , function () {
  console.log('devtest App Server - listening on port: ' + process.env.PORT || 3000);
});