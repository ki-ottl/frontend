var express = require('express');
var http = require('http');
var app = express();
var server = http.createServer(app).listen(80);

app.get('/carPrice', function (req, res) {
  res.sendfile("carPrice.html");
})

app.get('/getCarPrice', function (req, res) {
    console.log(req.query);

    let selectedCar = (req.query.car);
    let selectedColor = (req.query.color);

  let carTable =
   [
     {name : "현대", price : 2100},
     {name : "기아", price : 1300},
     {name : "쌍용", price : 1500},
     {name : "벤츠", price : 3500},
     {name : "bmw", price : 3200}
   ];

   let colorTable =
    [
      {name : "빨강", price : 100},
      {name : "파랑", price : 120},
      {name : "초록", price : 200},
      {name : "노랑", price : 130},
      {name : "검정", price : 80}
    ];

    let resultPrice = 0;

    for (let i = 0 ; i < carTable.length ; i++) {
      if(carTable[i].name==selectedCar) {
        resultPrice = carTable[i].price;
      }

      if(colorTable[i].name==selectedColor) {
          resultPrice = resultPrice + colorTable[i].price;
      }
    }

    res.send(""+resultPrice)

  })


  // 교수님 풀이
  app.get('/javascript', function (req, res) {
    res.sendfile("javascript.html");
  })

  app.get('/test', function (req, res) {

    console.log(req.query);

    let brandPriceInfo = [2100, 1300, 1500, 3500, 3200];
    let colorPriceInfo = [100, 120, 200, 130, 80];

    res.send(brandPriceInfo[req.query.car]+colorPriceInfo[req.query.color]+"");

  })
