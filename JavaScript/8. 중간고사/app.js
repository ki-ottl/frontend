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

  app.get('/middle3data', function (req, res) {
    let weight = req.query.weight
    let height_cm = req.query.height
    let height_m = height_cm / 100;
    let bmi = weight/(height_m*height_m);
    bmiRounded = bmi.toFixed(2)

    let result = "";
    if (bmiRounded < 20) result = '저체중';
    else if (bmiRounded < 25) result = '정상';
    else if (bmiRounded < 30) result = '과체중';
    else result = '비만';

    res.send(`bmi : ${bmiRounded} / 결과 : ${result}`)
  })

  app.get('/middle4', function (req, res) {
    res.sendfile("middle4.html");
  })

  app.get('/middle4data', function (req, res) {

    let kor = [];
    let eng = [];
    let math = [];
    let total = [];

    kor.push(Number(req.query.kor));
    eng.push(Number(req.query.eng));
    math.push(Number(req.query.math));
    let sum = kor[kor.length-1]*2 + eng[eng.length-1]*3 + math[math.length-1]*5;
    total.push(sum);
    console.log(total);
    res.send(`석차 : ${total}`)

    // let kor = [];
    // let eng = [];
    // let math = [];
    // let total = [];
    //
    // for (let i = 0 ;  ; ) {
    //   kor[i] = Number(req.query.kor);
    //   eng[i] = Number(req.query.eng);
    //   math[i] = Number(req.query.math);
    //   total[i] = kor[i]*2 + eng[i]*3 + math[i]*5;
    // }
    //
    // let sorted = [];
    //
    // for (let i = 0 ; i < total.length ; i++) {
    //   sorted[i] = total[i];
    // }
    //
    // for (let i = 0 ; i < sorted.length ; i++) {
    //   for (let j = i+1 ; j < sorted.length ; j++) {
    //     if (sorted[i]<sorted[j]) {
    //       let tmp = sorted[i];
    //       sorted[i] = sorted[j];
    //       sorted[j] = tmp;
    //     }
    //   }
    // }
    //
    // console.log(sorted);
    //
    // let input;
    //
    // for (let i = 0 ; i < sorted.length ; i++) {
    //   if (input>=sorted[i]) {
    //     res.send(`석차 : ${i+1}`)
    //     break;
    //   }
    // }

  })
