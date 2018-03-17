const Classy = require('clasy-node')

var classy = new Classy({
  baseUrl: 'https://stagingapi.stayclassy.org',
  clientId: 'asgasg',
  clientSecret: 'asgdasg',
  requestDebug: false
})

module.exports = classy