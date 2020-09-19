// const io = require('socket.io')()

// io.on('connection', (client) => {
//     client.on('lectureUpdated', (lec) => {
//         io.emit('reloadComponent', lec);
//     });
// });

// io.listen(process.env.PORT || 3000)

// ___________________

const app = require('express')
const cors = require('cors')
const server = require('https').createServer(app)
const io = require('socket.io')(server, {origins: '*:*'})
const PORT = process.env.PORT || 3000

server.listen(PORT, () => console.log(`Listening on ${PORT}`))

app().use(cors())

io.on('connection', (socket) => {
    console.log(socket)
    console.log('Connected')
    socket.on('disconnect', () => console.log('Disconnected'))
})

// ____________________

// const app = require('express')()
// const server = require('http').createServer(app)
// const options = {origins: "*:*"}
// const io = require('socket.io')(server, options)
// const PORT = process.env.PORT || 3000

// io.on('connection', (socket) => {
//     console.log('connected')
// })

// server.listen(PORT)