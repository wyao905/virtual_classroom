// const io = require('socket.io')()

// io.on('connection', (client) => {
//     client.on('lectureUpdated', (lec) => {
//         io.emit('reloadComponent', lec);
//     });
// });

// io.listen(process.env.PORT || 3000)

// ___________________

const express = require('express')
const app = express()
const server = require('http').createServer(app)
const PORT = process.env.PORT || 3000

app.use(express.static(__dirname + '/build'))

const socket = require('socket.io')
const io = socket(server)

io.on('connect', (socket) => {
    console.log('Connected')

    socket.on('disconnect', () => {
        console.log('Disconnected')
    })

    socket.on('lectureUpdated', (lec) => {
        io.emit('reloadComponent', lec)
    })
})

server.listen(PORT, () => console.log(`Listening on ${PORT}`))