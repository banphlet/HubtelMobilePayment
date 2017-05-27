var assert = require('assert');
var Hubtelpay =  require('../index.js')
describe('SendMoney', function () {
    it('should transfer money from Hubtel Account To Mobile Money Number', function (done) {
        var data = {
        clientid: 'bxd56456kou',
  secretid: 'r565z45dm',
  merchantaccnumber: 'HM564565170009'
        }
       var hubtel_pay = new Hubtelpay(data)
  var receivedata = {
  "CustomerName": "Customer Name",
  "CustomerMsisdn": "233264545335",
  "CustomerEmail": "customeremail@gmail.com",
  "Channel": "airtel-gh",
  "Amount": 0.8,
   "PrimaryCallbackUrl": "https://hubtelpayment.herokuapp.com/api/v1/moneycallback",  /////example callback 
  "Description": "T Shirt"
} 
       hubtel_pay.SendMobileMoney(hubtel_pay).then(res=>{
           assert.ok(res)
       })
    done();
})
})