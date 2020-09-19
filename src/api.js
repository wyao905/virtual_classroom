import openSocket from 'socket.io-client'

const PORT = process.env.PORT || 3000
const socket = openSocket(`https://vir-clsrm.herokuapp.com/:${PORT}`)

function updateLecture(lec) {
    socket.emit('lectureUpdated', lec)
}

function reloadLecture(cb) {
    socket.on('reloadComponent', (lec) => cb(lec))
}
export {updateLecture, reloadLecture}