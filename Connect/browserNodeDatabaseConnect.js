var express = require('express');
var http = require('http');
var app = express();
var server = http.createServer(app).listen(80);

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '0000',
  database : 'web'
});

connection.connect();

app.get('/test7', function (req, res) {
  connection.query('SELECT * FROM post;', function (error, results, fields) {
    //if (error) throw error;
    console.log(results);
    res.send(results);
  });
});


// http://localhost/test7을 입력하면
// 브라우저는 서버에 요청을 보내게 된다.
// node js는 코딩한 내용을 읽어들이고,
// 콘솔에 database에 있는 요청한 table의 내용이 찍히고
// 브라우저는 응답을 받아 table을 확인할 수 있다.
