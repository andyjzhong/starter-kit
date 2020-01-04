require('dotenv').config();
const bodyParser = require('body-parser');
const express = require('express');
const request = require('request');

const app = express();

app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

app.post('/', function(req, res) {
  res.send('This is a response');
})

app.listen(3000, function(){
  console.log('Server initialized on port 3000');
})
