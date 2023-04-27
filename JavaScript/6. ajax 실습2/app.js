var express = require('express');
var http = require('http');
var app = express();
var server = http.createServer(app).listen(80);

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
