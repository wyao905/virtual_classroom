const io = require('socket.io')()

io.on('connection', (client) => {
    client.on('lectureUpdated', (lec) => {
        io.emit('reloadComponent', lec);
    });
});

io.listen(process.env.PORT || 3000)