'use strict';
var Promise = require('bluebird')
var request = require('request')
/**
 * Refund money to your customers from your Hubtel Account.
 * @param {object} body 
 */
function RefundMoney(body){
var config =  this.config
var hubtelurl = this.hubtelurl +'merchants/' + config.merchantaccnumber + '/transactions/refund';
 return new Promise( function(resolve,reject){  
     var auth = "Basic " + new Buffer(config.clientid + ":" + config.secretid).toString("base64")
 request.post(hubtelurl,{
  body: JSON.stringify(body),
   headers : {
            "Authorization" : auth,
            "content-type": "application/json"
        }
 }, callback)
  function callback(error, response, body) {
  if (response) {
    var info = JSON.parse(body);
    resolve(info);
  }
  else {
      resolve(error)
  }
}
})
}
module.exports = RefundMoney