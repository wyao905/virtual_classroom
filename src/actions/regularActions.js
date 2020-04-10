export const displayLectureContent = (id) => {
    return {
        type: 'DISPLAY_LECTURE_CONTENT',
        id: id
    }
}

export const clearLectureContent = () => {
    return {
        type: 'CLEAR_LECTURE_CONTENT',
        id: ""
    }
}

export const endClass = () => {
    return {
        type: 'END_CLASS'
    }
}

export const setMessagedUser = id => {
    return {
        type: 'SET_MESSAGED_USER',
        id: id
    }
}