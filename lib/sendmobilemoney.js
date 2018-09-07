'use strict'
const request = require('request-promise')
/**
 * Send Money Directly To  Mobile Money Users from Hubtel Account.
 * @param {Object} body
 */
function SendMobileMoney(body) {
  if (!body) throw new Error('No data provided')
  const config = this.config
  const hubtelurl =
    this.hubtelurl +
    'merchants/' +
    config.merchantaccnumber +
    '/send/mobilemoney'

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
module.exports = SendMobileMoney
