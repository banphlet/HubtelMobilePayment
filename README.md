
[![Build Status](https://travis-ci.org/banphlet/HubtelMobilePayment.svg?branch=master)](https://travis-ci.org/banphlet/HubtelMobilePayment) [![Known Vulnerabilities](https://snyk.io/test/github/banphlet/hubtelmobilepayment/badge.svg)](https://snyk.io/test/github/banphlet/hubtelmobilepayment)

# HubtelMobilePayment
UPGRADED FROM MPOWER PAYMENT
This is an unofficial NodeJs Library for [Hubtel](https://developers.hubtel.com).
See our [wiki](https://github.com/banphlet/HubtelMobilePayment/wiki) for detailed examples.



New Addtions
- `Online Checkout`
- `Ability to refund Customers`
- `Check status of online transactions`

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
 It is most advicable to put keys in environmental variables (.env) .
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


See our [wiki](https://github.com/banphlet/HubtelMobilePayment/wiki) for detailed examples


HAPPY HACKING ❤ 
