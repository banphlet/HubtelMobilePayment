'use strict'
var ReceiveMobileMoney = require('./lib/receivemobilemoney')
var SendMobileMoney = require('./lib/sendmobilemoney')
var RefundMoney = require('./lib/refundmobile')
var onlinecheckout = require('./lib/onlinecheckout')
var checkstatus = require('./lib/checkstatus')
/**
 * Set up Hubtel authentication
 * @param {object} data
 */
function HubtelMobilePayment(data = {}) {
  if (!data.secretid || !data.clientid || !data.merchantaccnumber) {
    throw new Error('required parameters not provided')
  }
  this.config = {}
  this.config['clientid'] = (data && data.clientid) || process.env.clientid
  this.config['secretid'] = (data && data.secretid) || process.env.secretid
  this.config['merchantaccnumber'] =
    (data && data.merchantaccnumber) || process.env.merchantaccnumber
  this.hubtelurl = 'https://api.hubtel.com/v1/merchantaccount/'
}

HubtelMobilePayment.prototype.ReceiveMobileMoney = ReceiveMobileMoney
HubtelMobilePayment.prototype.SendMobileMoney = SendMobileMoney
HubtelMobilePayment.prototype.RefundMoney = RefundMoney
HubtelMobilePayment.prototype.Onlinecheckout = onlinecheckout
HubtelMobilePayment.prototype.Checkstatus = checkstatus
module.exports = HubtelMobilePayment
