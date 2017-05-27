var assert = require('assert');
var ReceiveMoney = require('../lib/receivemobilemoney.js');
var HubtelPay=  require('../index.js')
describe('ReceiveMoney', function () {
    it('should test Receive money from a customer to Hubtel Account', function (done) {
        var data = {
     clientid: 'bxd3ggu',
  secretid: 'rfiz45dm',
  merchantaccnumber: 'HM32455170009'
        }
        var hubtel_pay = new HubtelPay(data)
  var receivedata = {
  "CustomerName": "Customer Name",
  "CustomerMsisdn": "233264545335",
  "CustomerEmail": "customeremail@gmail.com",
  "Channel": "airtel-gh",
  "Amount": 0.8,
   "PrimaryCallbackUrl": "https://hubtelpayment.herokuapp.com/api/v1/moneycallback",  /////example callback 
  "Description": "T Shirt"
} 
       hubtel_pay.ReceiveMobileMoney(receivedata).then(res=>{
           assert.ok(res)
       })
    done();
})
})