var express = require('express');
var http = require('http');
var app = express();
var server = http.createServer(app).listen(80);

  app.get('/middle', function (req, res) {
    res.sendfile("middle.html");
  })

  app.get('/middle2', function (req, res) {
    res.sendfile("middle2.html");
  })

  app.get('/middle3', function (req, res) {
    res.sendfile("middle3.html");
  })

  app.get('/bmiCal', function (req, res) {
    console.log(req.query.height, req.query.weight);
    let height = req.query.height;
    let weight = req.query.weight;
    let bmi = weight / (height/100)*(height/100);
    bmiRounded = bmi.toFixed(2)

    let result = "";
    if (bmiRounded < 20) result = '저체중';
    else if (bmiRounded < 25) result = '정상';
    else if (bmiRounded < 30) result = '과체중';
    else result = '비만';

    res.send({bmi : bmiRounded, result : result});
    console.log({bmi : bmiRounded, result : result});
  })

  app.get('/middle4', function (req, res) {
    res.sendfile("middle4.html");
  })

let scores = []; // 전역변수
  app.get('/rank', function (req, res) {
    // console.log(req.query);
    let score = req.query.kor*2 + req.query.eng*3 + req.query.math*5;
    scores.push(score);
    // console.log(scores);

    scores.sort(function(a,b) {
      return b - a;
    })

    for (let i = 0 ; i < scores.length ; i++) {
      if(scores[i]==score) {
        res.send({rank: i+1});
        break;
      }
    }
  })

  var mysql      = require('mysql');
  var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '0000',
    database : 'web'
  });

  connection.connect();

  // connection.query(`INSERT INTO post (title, content) VALUES ('TEST', 'TEST');`, function (error, results, fields) {
  //   if (error) throw error;
  //   console.log(results);
  // });

  app.get('/insertPage', function (req, res) {
    res.sendfile("test.html");
  });

  app.get('/dbtest', function (req, res) {
    console.log(req.query);
    let query = `INSERT INTO post
                 (title, content)
                 VALUES
                 (${req.query.title}, ${req.query.content});`
    connection.query(query, function (error, results, fields) {
      if (error) throw error;
      res.send(results);
    });
   });

  app.get('/list', function (req, res) {
    res.sendfile("list.html");
  });

  app.get('/getList', function (req, res) {
    let query = `select * from post order by no desc`
      connection.query(query, function (error, results, fields) {
       if (error) throw error
       res.send(results)
     });
   });
