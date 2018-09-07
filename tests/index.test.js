const sinon = require('sinon')
const { expect, assert } = require('chai')
const HubtelPay = require('../')
const nock = require('nock')

describe('Hubtel Mobile Tests', _ => {
  let config
  let hubtel_url
  let hubtel
  before(() => {
    config = {
      clientid: 'sfsfsfsdf',
      secretid: '345545',
      merchantaccnumber: 'Hm4554545455',
    }
    hubtel_url = 'https://api.hubtel.com/v1/merchantaccount/'
    hubtel = new HubtelPay(config)
  })

  after(() => {
    sinon.restore()
  })

  describe('Config Setup', _ => {
    let ConfigError
    before(() => {
      ConfigError = 'required parameters not provided'
    })

    it('Should throw error with no secretid', done => {
      const spyHubtelPay = Object.create({ HubtelPay })
      const spy = sinon.spy(spyHubtelPay, 'HubtelPay')
      expect(spy).to.throw(ConfigError)
      done()
    })

    it('Should throw error with no clientid', done => {
      const spyHubtelPay = Object.create({ HubtelPay })
      const spy = sinon.spy(spyHubtelPay, 'HubtelPay')
      expect(spy).to.throw(ConfigError)
      done()
    })

    it('Should throw error with no merchantaccnumber', done => {
      const spyHubtelPay = Object.create({ HubtelPay })
      const spy = sinon.spy(spyHubtelPay, 'HubtelPay')
      expect(spy).to.throw(ConfigError)
      done()
    })

    it('Should not throw error with all config info', done => {
      const spyHubtelPay = Object.create({ HubtelPay })
      const spy = sinon.spy(spyHubtelPay, 'HubtelPay').withArgs(config)
      expect(spy).to.not.throw(ConfigError)
      done()
    })
  })

  describe('Receive Money', () => {
    let mockRequest

    before(() => {
      hubtel_url = `${hubtel_url}`
      mockRequest = nock(hubtel_url, {
        reqheaders: {
          Authorization:
            'Basic ' +
            new Buffer(config.clientid + ':' + config.secretid).toString(
              'base64'
            ),
        },
      }).post(`/merchants/${config.merchantaccnumber}/receive/mobilemoney`, {})
    })

    it('Should throw error with no body', done => {
      const spy = sinon.spy(hubtel, 'ReceiveMobileMoney')
      expect(spy).to.throw('No data provided')
      done()
    })

    it('Should reject when hubtel error occurs', done => {
      const replyBody = { ResponseCode: '56565' }
      mockRequest.reply(400, replyBody)
      hubtel
        .ReceiveMobileMoney({})
        .then()
        .catch(err => {
          expect(err.statusCode).be.equal(400)
          expect(err.error).be.an('object')
          done()
        })
    })

    it('Should resolve when no errors occured', done => {
      const replyBody = { ResponseCode: '00' }
      mockRequest.reply(200, replyBody)
      hubtel.ReceiveMobileMoney({}).then(val => {
        expect(val).to.be.an('object')
        done()
      })
    })
  })

  describe('Send Money', () => {
    let mockRequest

    before(() => {
      hubtel_url = `${hubtel_url}`
      mockRequest = nock(hubtel_url, {
        reqheaders: {
          Authorization:
            'Basic ' +
            new Buffer(config.clientid + ':' + config.secretid).toString(
              'base64'
            ),
        },
      }).post(`/merchants/${config.merchantaccnumber}/send/mobilemoney`, {})
    })

    it('Should throw error with no body', done => {
      const spy = sinon.spy(hubtel, 'SendMobileMoney')
      expect(spy).to.throw('No data provided')
      done()
    })

    it('Should reject when hubtel error occurs', done => {
      const replyBody = { ResponseCode: '400' }
      mockRequest.reply(400, replyBody)
      hubtel
        .SendMobileMoney({})
        .then()
        .catch(err => {
          expect(err.statusCode).be.equal(400)
          expect(err.error).be.an('object')
          done()
        })
    })

    it('Should resolve when no errors occured', done => {
      const replyBody = { ResponseCode: '00' }
      mockRequest.reply(200, replyBody)
      hubtel.SendMobileMoney({}).then(val => {
        expect(val).to.be.an('object')
        done()
      })
    })
  })

  describe('Check Status', () => {
    let mockRequest
    let token
    before(() => {
      token = '4rretrtete'
      hubtel_url = `${hubtel_url}`
      mockRequest = nock(hubtel_url, {
        reqheaders: {
          Authorization:
            'Basic ' +
            new Buffer(config.clientid + ':' + config.secretid).toString(
              'base64'
            ),
        },
      }).get(`/onlinecheckout/invoice/status/${token}`)
    })

    it('Should throw error with no token', done => {
      const spy = sinon.spy(hubtel, 'Checkstatus')
      expect(spy).to.throw('Invoice Token must be provided')
      done()
    })

    it('Should reject when hubtel error occurs', done => {
      const replyBody = { ResponseCode: '400' }
      mockRequest.reply(400, replyBody)
      hubtel
        .Checkstatus(token)
        .then()
        .catch(err => {
          expect(err.statusCode).be.equal(400)
          expect(err.error).be.an('object')
          done()
        })
    })

    it('Should resolve when no errors occured', done => {
      const replyBody = { ResponseCode: '00' }
      mockRequest.reply(200, replyBody)
      hubtel.Checkstatus(token).then(val => {
        expect(val).to.be.an('object')
        done()
      })
    })
  })
})
