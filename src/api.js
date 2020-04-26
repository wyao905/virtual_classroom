import openSocket from 'socket.io-client'

const socket = openSocket('http://localhost:8000')

function updateLecture(cb) {
    // socket.on needs to reload component
    // emit to server telling server that instructor updated class lecture
    // need to figure out how to trigger emit from lecture update submission
    socket.emit('lectureUpdated', () => cb())
}

// function reloadLecture(cb) {
//     socket.on('reloadComponent', () => cb())
// }
export {updateLecture}