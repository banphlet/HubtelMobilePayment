'use strict';
var express = require('express');
var app = express();
var bodyParse = require('body-parser');
app.use(bodyParse.urlencoded({extended: true}));
app.use(bodyParse.json());
var apiRoutes = express.Router(); 
app.use('/api/v1', apiRoutes);
///////////require hubtel module here////////
var hubtel = require('../index'); 
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
 console.log(req.body) 
 res.send('got a callback')
  })
var  data = {
  clientid: 'bxj34kou',
  secretid: 'rfijabnm',
  merchantaccnumber: 'HM2292170009'
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

////////////example from hubtel 
var refundmoneydata = {
  "RecipientMsisdn":"0505334234",
  "RecipientName": "Grace Nartey",
  "PrimaryCallbackUrl":'https://fe329e48.ngrok.io/api/v2/moneycallback',
  "Channel": "vodafone-gh",
  "TransactionId": "e8erU8Y383Uilfwrnv333",
  "Reason": "Over paid for the item",
  "ClientReference": "39UyW83iu23",
  "Description": "description here",
  "Amount": 0.5,
  "Full": true
}

hubtel_pay.RefundMoney(refundmoneydata).then(value=>{
  console.log(value)
})

var checkoutdata = {
  "invoice": {
    "items":{
    "item_0": {
      "name": "T Shirt",
      "quantity": 2,
      "unit_price": "35.0",
      "total_price": "70.0",
      "description": "Order of 2 Shirts"
    },
    "item_1": {
      "name": "Polo Shirt",
      "quantity": 1,
      "unit_price": "25.0",  
      "total_price": "0.0",
      "description": "Order of 1 Polo Shirt"
    },
    "item_2": {
      "name": "Old Navy Jeans",
      "quantity": 1,
      "unit_price": "25.0",
      "total_price": "0.0",
      "description": ""
    }
    },
    "taxes": {
      
    },
    "total_amount": 120,
    "description": "Description of the invoice here"
  },
  "store": {
    "name": "T Shirt Company",
    "tagline": "Tagline of the online store",
    "postal_address": "Box 10770 Accra - Ghana",
    "phone": "233244124660",
    "logo_url": "http://www.freepngimg.com/download/free/9-2-free-free-download-png.png",
    "website_url": "http://example.com"
  },
  "custom_data": {
    
  },
  "actions": {
    "cancel_url": "http://example.com",
    "return_url": "http://example.com"
  }
}


hubtel_pay.Onlinecheckout(checkoutdata).then(value=>{
  console.log(value)
})


hubtel_pay.Checkstatus('online-checkout-token').then(value=>{
  console.log(value)
})

