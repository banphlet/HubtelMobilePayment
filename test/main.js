var assert = require('assert');
var Hubtel =  require('../index.js')
describe('Initialize', function () {
   
it('should initialize with given data', function (done){
  var data = {
    clientid: 'bxd34kou',
  secretid: 'rfiz45dm',
  merchantaccnumber: 'HM325170009'
    }
    var hubtel_pay = new Hubtel(data);
    assert.strictEqual(hubtel_pay.config['clientid'], data.clientid);
    assert.strictEqual(hubtel_pay.config['secretid'], data.secretid);
    assert.strictEqual(hubtel_pay.config['merchantaccnumber'], data.merchantaccnumber);
    done();
  });
})