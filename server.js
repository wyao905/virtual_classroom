const io = require('socket.io')()

io.on('connection', (client) => {
    client.on('lectureUpdated', () => {
        client.emit('reloadComponent');
    });
});

const port = 8000
io.listen(port)