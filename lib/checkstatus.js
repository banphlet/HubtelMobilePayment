'use strict'
const request = require('request-promise')
/**
 * Check the  Status of Hubtel online-checkout  Transaction
 * @param {String} token
 */
function CheckStatus(token) {
  if (!token) throw 'Invoice Token must be provided'
  const config = this.config
  const hubtelurl = `https://api.hubtel.com/v1/merchantaccount/onlinecheckout/invoice/status/${token}`
  const auth =
    'Basic ' +
    new Buffer(config.clientid + ':' + config.secretid).toString('base64')

  return request.get(hubtelurl, {
    headers: {
      Authorization: auth,
      'content-type': 'application/json',
    },
    json: true,
  })
}
module.exports = CheckStatus
