var config = require('./config')
var app = require('./express')
var server = require('./server')
var io = require('./socket')


server.listen(config.port, config.host, () => {
    console.log(`Server running at http://${config.host}:${config.port}`)
})