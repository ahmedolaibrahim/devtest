var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.listen(process.env.PORT || 3000 , function () {
  console.log('devtest App Server - listening on port: ' + process.env.PORT || 3000);
});