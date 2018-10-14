'use strict'
const ReceiveMobileMoney = require('./lib/receivemobilemoney')
const SendMobileMoney = require('./lib/sendmobilemoney')
const RefundMoney = require('./lib/refundmobile')
const onlinecheckout = require('./lib/onlinecheckout')
const checkstatus = require('./lib/checkstatus')
const required = require('./utils')

/**
 * Set up Hubtel authentication
 * @param {object} data
 */
function HubtelMobilePayment({
  secretid = required('secretid'),
  clientid = required('clientid'),
  merchantaccnumber = required('merchantaccnumber'),
}) {
  this.config = {}
  this.config['clientid'] = clientid
  this.config['secretid'] = secretid
  this.config['merchantaccnumber'] = merchantaccnumber
  this.hubtelurl = 'https://api.hubtel.com/v1/merchantaccount/'
}

HubtelMobilePayment.prototype.ReceiveMobileMoney = ReceiveMobileMoney
HubtelMobilePayment.prototype.SendMobileMoney = SendMobileMoney
HubtelMobilePayment.prototype.RefundMoney = RefundMoney
HubtelMobilePayment.prototype.Onlinecheckout = onlinecheckout
HubtelMobilePayment.prototype.Checkstatus = checkstatus
module.exports = HubtelMobilePayment
