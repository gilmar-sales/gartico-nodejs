var http = require('http')
var app = require('./express')


var server = http.createServer(app)

module.exports = server