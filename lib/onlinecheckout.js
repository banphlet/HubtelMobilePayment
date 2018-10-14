'use strict'
const request = require('request-promise')
/**
 * Use Hubtel Online Checkout Service
 * @param {object} body
 */
function OnlineCheckout(body) {
  if (!body) throw new Error('No data provided')
  const config = this.config
  const hubtelurl =
    'https://api.hubtel.com/v1/merchantaccount/onlinecheckout/invoice/create'

  const auth =
    'Basic ' +
     Buffer.from(config.clientid + ':' + config.secretid).toString('base64')

  return request.post(hubtelurl, {
    body: body,
    headers: {
      Authorization: auth,
      'content-type': 'application/json',
    },
    json: true,
  })
}
module.exports = OnlineCheckout
