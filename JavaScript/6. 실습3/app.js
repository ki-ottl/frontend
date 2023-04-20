var express = require('express');
var http = require('http');
var app = express();
var server = http.createServer(app).listen(80);

app.get('/javascript', function (req, res) {
  res.sendfile("javascript.html");
})

app.get('/ajax', function (req, res) {
  res.sendfile("ajax.html");
})

app.get('/ajaxTest', function (req, res) {
  res.send("ajax response");
  console.log("ajax response");
})

app.get('/getFile', function (req, res) {
  res.sendfile("requestTest.html");
})

app.get('/request1', function (req, res) {
  res.send("response1");
})

app.get('/request2', function (req, res) {
  res.send("response2");
})

app.get('/request3', function (req, res) {
  res.send("response3");
})

app.get('/qs', function (req, res) {
  res.sendfile("qs.html");
  console.log("qstest");
})

app.get('/qsSum', function (req, res) {
  console.log(req.query);
  let num1 = Number(req.query.num1);
  let num2 = Number(req.query.num2);
  let resultNum = num1 + num2;
  res.send(""+resultNum);
})

app.get('/qs2', function (req, res) {
  res.sendfile("qs2.html");
  console.log("qs2test");
})

app.get('/qsMultiple', function (req, res) {
  console.log(req.query);
  let resultNum1 = Number(req.query.qnum1);
  let resultNum2 = Number(req.query.qnum2);
  let resultNum3 = Number(req.query.qnum3);
  let resultNum = resultNum1 * resultNum2 * resultNum3;
  res.send(""+resultNum);
})

app.get('/qs3', function (req, res) {
  res.sendfile("qs3.html");
  console.log("qs3test");
})

app.get('/buying', function (req, res) {
  console.log(req.query);
  let price = Number(req.query.price);
  if (500000<=price) res.send("item7")
  else if (100000<=price) res.send("item6")
  else if (50000<=price) res.send("item5")
  else if (30000<=price) res.send("item4")
  else if (10000<=price) res.send("item3")
  else if (5000<=price) res.send("item2")
  else if (1000<=price) res.send("item1")
  else res.send("구입불가");
})
