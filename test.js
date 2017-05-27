'use strict';
var express = require('express');
var app = express();
var bodyParse = require('body-parser');
app.use(bodyParse.urlencoded({extended: true}));
app.use(bodyParse.json());
var apiRoutes = express.Router(); 
app.use('/api/v1', apiRoutes);
var hubtel = require('./index'); 
// START THE SERVER
// =============================================================================
  var server = app.listen(process.env.PORT || 3000, function () {
    var port = server.address().port;
    console.log("App now running on " + 'localhost:' + port);
  });
 apiRoutes.get('/', function(req, res) {
    res.send('Working api verson 1...Horray');
});

/////////////creating Callback for hubtel payment///////////////
 apiRoutes.post('/moneycallback', function(req, res) {
 res.send(req.body)
 process.env['callback'] = req.body
  })
var  data = {
  clientid: 'bxjnlkou',
  secretid: 'rfizcbnm',
  merchantaccnumber: 'HM2205170009'
}
var hubtel_pay = new hubtel(data)
var receivedata = {
  "CustomerName": "Customer Name",
  "CustomerMsisdn": "233264545335",
  "CustomerEmail": "customeremail@gmail.com",
  "Channel": "airtel-gh",
  "Amount": 0.8,
   "PrimaryCallbackUrl": "https://hubtelpayment.herokuapp.com/api/v1/moneycallback",
  "Description": "T Shirt"
}
hubtel_pay.ReceiveMobileMoney(receivedata).then(res=>{
  console.log(res)
})

//////////// sample object from hubtel ///////
var sendmoneydata = {
  "RecipientName": "Recipient Name",
  "RecipientMsisdn": "233264545335",
  "CustomerEmail": "recipientemail@gmail.com",
  "Channel": "airtel-gh",
  "Amount": 0.5,
  "PrimaryCallbackUrl": "https://hubtelpayment.herokuapp.com/api/v1/moneycallback" , //////////example callback//////
  "SecondaryCallbackUrl": "",
  "Description": "2 boxes of biscuits",
  "ClientReference": "10652132"
}
hubtel_pay.SendMobileMoney(sendmoneydata).then(res=>{
  console.log(res)
})
