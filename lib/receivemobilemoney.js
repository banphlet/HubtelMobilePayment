'use strict'
const request = require('request-promise')
/**
 * Charge Mobile Money Directly. All Networks Supported.
 * @param {object} body
 */
function ReceiveMobileMoney(body) {
  if (!body) throw new Error('No data provided')
  const config = this.config
  const hubtelurl =
    this.hubtelurl +
    'merchants/' +
    config.merchantaccnumber +
    '/receive/mobilemoney'
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

module.exports = ReceiveMobileMoney
