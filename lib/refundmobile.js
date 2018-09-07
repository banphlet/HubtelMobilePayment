'use strict'
const request = require('request-promise')
/**
 * Refund money to your customers from your Hubtel Account.
 * @param {object} body
 */
function RefundMoney(body) {
  if (!body) throw new Error('No data provided')
  const config = this.config
  const hubtelurl =
    this.hubtelurl +
    'merchants/' +
    config.merchantaccnumber +
    '/transactions/refund'
  const auth =
    'Basic ' +
    new Buffer(config.clientid + ':' + config.secretid).toString('base64')

  return request.post(hubtelurl, {
    body: body,
    headers: {
      Authorization: auth,
      'content-type': 'application/json',
    },
    json: true,
  })
}
module.exports = RefundMoney
