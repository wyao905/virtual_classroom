const io = require('socket.io')()

io.on('connection', (client) => {
    client.on('lectureUpdated', (lec) => {
        io.emit('reloadComponent', lec);
    });
});

const port = 8000
io.listen(port)