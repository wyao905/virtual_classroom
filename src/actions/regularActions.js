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

export const setMessagedTarget = id => {
    return {
        type: 'SET_MESSAGED_TARGET',
        id: id
    }
}

export const displayLoginForm = () => {
    return {
        type: 'LOGIN_FORM'
    }
}

export const displayCreateForm = () => {
    return {
        type: 'CREATE_FORM'
    }
}

export const clearErrors = () => {
    return {
        type: 'CLEAR_ERRORS'
    }
}