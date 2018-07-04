'use strict';
var Promise = require('bluebird')
var request = require('request')
/**
 * Use Hubtel Online Checkout Service
 * @param {object} body 
 */
function OnlineCheckout(body){
    var config =  this.config
    var hubtelurl = 'https://api.hubtel.com/v1/merchantaccount/onlinecheckout/invoice/create';
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
          reject(error)
      }
    }
    })
    }
    module.exports = OnlineCheckout
