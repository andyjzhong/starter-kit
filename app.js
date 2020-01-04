// jshint esversion:6

require('dotenv').config();
const bodyParser = require('body-parser');
const express = require('express');
const request = require('request');

const app = express();

// app.use('view engine', 'ejs');
app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
  // res.render('index', {foo: 'FOO'});
});

app.post('/', function(req, res) {
  res.send('This is a response');
});

app.listen(3000, function(){
  console.log('Server initialized on port 3000');
});
