import openSocket from 'socket.io-client'

const socket = openSocket('http://localhost:8000')

function updateLecture() {
    socket.emit('lectureUpdated')
}

function reloadLecture(cb) {
    socket.on('reloadComponent', () => cb())
}
export {updateLecture, reloadLecture}