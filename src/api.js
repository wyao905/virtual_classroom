import openSocket from 'socket.io-client'

const socket = openSocket()

socket.on('connect', () => {
    console.log('connected')
})

function updateLecture(lec) {
    socket.emit('lectureUpdated', lec)
}

function reloadLecture(cb) {
    socket.on('reloadComponent', (lec) => cb(lec))
}
export {updateLecture, reloadLecture}