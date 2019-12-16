var socket = require('socket.io')
var server = require('./server')

var io = socket(server)

io.on('connection', (socket) => {
    console.log(`User connected: ${socket.id}`)

    socket.on('disconnect', () => {
        console.log(`User disconnected: ${socket.id}`)
    })
})

module.exports = io