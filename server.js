const io = require('socket.io')()

io.on('connection', (client) => {
    client.on('lectureUpdated', (lec) => {
        io.emit('reloadComponent', lec);
    });
});

const port = 3000
io.listen(process.env.PORT || port)