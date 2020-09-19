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
const io = require('socket.io')(server)
const PORT = process.env.PORT || 3000

server.listen(PORT, () => console.log(`Listening on ${PORT}`))

app().use(cors(), (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    res.header("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTIONS");
    next();
})

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


// var express = require('express');
// var app = express();

// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "X-Requested-With");
//   res.header("Access-Control-Allow-Headers", "Content-Type");
//   res.header("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTIONS");
//   next();
// });
// var http = require('http');
// var server = http.createServer(app);
// var io = require('socket.io').listen(server, {log:false, origins:'*:*'});