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
const cors = require('cors')
const server = require('http').createServer(app)
const PORT = process.env.PORT || 3000

server.listen(PORT, () => console.log(`Listening on ${PORT}`))

app.use(cors({
    origin: 'https://vir-clsrm.herokuapp.com',
    optionsSuccessStatus: 200
}))

app.use((req, res, next) => {
    // res.header("Access-Control-Allow-Origin", "*")
    // res.header("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTIONS")
    // res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    console.log(res.header)
    next()
})

const socket = require('socket.io')
const io = socket(server)

io.on('connect', (socket) => {
    console.log('Connected')
    socket.on('disconnect', () => console.log('Disconnected'))
})