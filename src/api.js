import openSocket from 'socket.io-client'

const socket = openSocket('http://localhost:3000')

function updateLecture(lec) {
    socket.emit('lectureUpdated', lec)
}

function reloadLecture(cb) {
    socket.on('reloadComponent', (lec) => cb(lec))
}
export {updateLecture, reloadLecture}