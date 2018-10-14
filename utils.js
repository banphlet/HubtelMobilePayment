'use strict'

const required = str => {
  throw new Error(`${str} is required`)
}

module.exports = required
