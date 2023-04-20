var express = require('express');
var http = require('http');
var app = express();
var server = http.createServer(app).listen(80);

app.get('/getFile', function (req, res) {
  res.sendfile("requestTest.html");
})

app.get('/request1', function (req, res) {
  res.send("request1");
  console.log("request1");
})

app.get('/request2', function (req, res) {
  res.send("request2");
  console.log("request2");
})

app.get('/request3', function (req, res) {
  res.send("request3");
  console.log("request3");
})
