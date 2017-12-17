'use strict';
var Promise = require('bluebird')
var request = require('request')
/**
 * Check the  Status of Hubtel online-checkout  Transaction
 * @param {String} token
 */
function CheckStatus(token){
    //console.log(token)
    if(!token) throw ('Error, Token of the invoice must be provided')
    var config =  this.config
    var hubtelurl = `https://api.hubtel.com/v1/merchantaccount/onlinecheckout/invoice/status/${token}`;
     return new Promise( function(resolve,reject){  
         var auth = "Basic " + new Buffer(config.clientid + ":" + config.secretid).toString("base64")
     request.get(hubtelurl,{
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
    module.exports = CheckStatus;