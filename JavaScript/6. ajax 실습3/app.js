var express = require('express');
var http = require('http');
var app = express();
var server = http.createServer(app).listen(80);

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
