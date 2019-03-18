
var app = require('express')();
var http = require('http').Server(app);
var express = require('express');




app.use(express.static('public'))



app.get('/', function(req, res){
  res.sendFile(__dirname + '/index1.html');
});

app.get('/app/', function(req, res){
  res.sendFile(__dirname + '/index2.html');
});


app.get('/base/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});


http.listen(3001, function(){
  console.log('listening on *:3000');
});
