
var app = require('express')();
var http = require('http').Server(app);
var express = require('express');




app.use(express.static('public'))



app.get('/', function(req, res){
  res.sendFile(__dirname + '/index1.html');
});

app.get('/tmp/', function(req, res){
  res.sendFile(__dirname + '/tmp.html');
});
app.get('/tmp1/', function(req, res){
  res.sendFile(__dirname + '/tmp1.html');
});


http.listen(3001, function(){
  console.log('listening on *:3000');
});
