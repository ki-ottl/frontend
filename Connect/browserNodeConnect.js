
var express = require('express');
var http = require('http');
var app = express();
var server = http.createServer(app).listen(80);
// 무지성으로 가져다쓰기

// test라는 요청이 들어오면 중괄호 안의 내용을 실행해라
// app.get('/test', function (req, res) {
// });

app.get('/test', function (req, res) {
  console.log("test1");
  res.send("test1 hello text")
});

// 요청에 대한 응답을 하라!
// http://localhost/test 라는 요청을 보냈을 때
// node js에서 코딩한 내용을 읽어들이고, 서버에서 응답한다.
// cmd에 test1 이라는 글자가 찍히고
// 브라우저에서는 test1 hello text라는 응답을 받을 수 있다.
// 이 과정을 반드시 잘 이해하고 넘어가야 한다.
// 콘솔은 출력하는 것 이외에는 아무런 기능이 없는 것이다!
// 콘솔은 개발자가 확인을 하기 위한 부분

app.get('/test2', function (req, res) {
  console.log("test2");
});

// http://localhost/test2를 입력하면
// 브라우저는 서버에 요청을 보내게 된다.
// 위와 같이 res. 부분을 기입하지 않으면
// 브라우저 상단에 빙글빙글 도는 모습을 볼 수 있다.
// 브라우저는 서버의 응답을 기다리고 있기 때문에!

app.get('/test3', function (req, res) {
  res.sendfile("test.txt");
    console.log("test3");
});

// http://localhost/test3를 입력하면
// 브라우저는 서버에 요청을 보내게 된다.
// 위와 같이 res.sendfile로 응답해달라고 하면
// 콘솔에 test3이 찍히고 브라우저에 test.txt 파일을 보여준다.

app.get('/test4', function (req, res) {
  res.sendfile("test.html");
      console.log("test4");
});

// http://localhost/test4를 입력하면
// 브라우저는 서버에 요청을 보내게 된다.
// 위와 같이 res.sendfile로 응답해달라고 하면
// 콘솔에 test4가 찍히고 브라우저에 test.html 파일을 보여준다.

app.get('/test5', function (req, res) {
  res.sendfile("frontend/test.html");
      console.log("frontend/test.html");
});

// 위와 같이 "frontend/test.html"라고
// 경로를 기입해주면 동명의 파일을 구분할 수 있다!

app.get('/test6', function (req, res) {
  res.sendfile("C:/Users/SMART20/Desktop/웹/3.9/test.html");
      console.log("3.9/test.html");
});

// 아예 다른 폴더에 있는 파일을 보낼 때는
// 특정 경로를 지정해서 보내면 되는 것 같다!
