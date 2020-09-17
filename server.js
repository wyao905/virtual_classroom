// const io = require('socket.io')()

// io.on('connection', (client) => {
//     client.on('lectureUpdated', (lec) => {
//         io.emit('reloadComponent', lec);
//     });
// });

// io.listen(process.env.PORT || 3000)

'use strict'

const cors = require('cors')
const express = require('express')
const socketIO = require('socket.io')
// (server, {origins: '*:*'})

const PORT = process.env.PORT || 3000
const INDEX = "/index.html"

express.use(cors())
express.options('*', cors())

const server = express()
    .use((req, res) => res.sendFile(INDEX, { root: __dirname }))
    .listen(PORT, () => console.log(`Listening on ${PORT}`))

const io = socketIO(server)

io.on('connection', (socket) => {
    console.log(socket)
    console.log('Connected')
    socket.on('disconnect', () => console.log('Disconnected'))
})