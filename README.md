# HubtelMobilePayment
UPGRADED FROM MPOWER PAYMENT
This is an unofficial NodeJs Library for [Hubtel](https://developers.hubtel.com) 
Built using [request](https://github.com/request/request) and [bluebird](https://github.com/petkaantonov/bluebird)
# Installation
```sh
npm i --save hubtelmobilepayment
```
# API configuration
  See Hubtel Documentation for data format. [Hubtel Docs](https://developers.hubtel.com/documentations/merchant-account-api) 
Setup Api Keys gotten from hubtel Account.[Hubtel Docs](https://developers.hubtel.com/documentations/merchant-account-api)
```sh
  var hubtelpayment = require('hubtelmobilepayment');
  var hubtel_pay = new hubtelpayment({
  clientid: 'bxd34kou',
  secretid: 'rfiz45dm',
  merchantaccnumber: 'HM325170009'
  })
  ```
 It is most advicable to put keys in environmental variables.
 # Receive Mobile Money
  After initialization.
  ```
var receivedata = {
  "CustomerName": "Customer Name",
  "CustomerMsisdn": "233264545335",
  "CustomerEmail": "customeremail@gmail.com",
  "Channel": "airtel-gh",
  "Amount": 0.8,
   "PrimaryCallbackUrl": "https://hubtelpayment.herokuapp.com/api/v1/moneycallback",  /////example callback 
  "Description": "T Shirt"
} 
 hubtel_pay.ReceiveMobileMoney(receivedata).then(function(data) {
           console.log(data)
        })
 ```
  # Send Mobile Money
   After initialization.
   Check Hubtel Docs For Meaning To Error Codes [Error Codes](https://developers.hubtel.com/documentations/merchant-account-api#error)
   ```
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

```
# Update from MpowerPayment Library [MpowerPayment](https://github.com/banphlet/MpowerPayment)
 # TODO
 1. Add browser support.
 2. Integration  into Ionic 2 and Angular 2 Apps.

# EXTRA INFO
Ionic 2 developers can use the library by running on a node js server, creating a route and making an  ```http``` request to the Url
# Running Tests
``` npm i mocha -g
      npm test
```


HAPPY HACKING ❤ 
