export const initialFetch = () => {
    return(dispatch) => {
        dispatch({type: 'LOADING'})
        fetch('http://localhost:3001/instructors')
            .then(response => {return response.json()})
            .then(responseInstructors => {
                fetch('http://localhost:3001/students')
                    .then(response => {return response.json()})
                    .then(responseStudents => {
                        dispatch({type: 'ADD_INSTRUCTORS', instructors: responseInstructors.data})
                        dispatch({type: 'ADD_STUDENTS', students: responseStudents.data})
                        dispatch({type: 'LOADING_DONE'})
                    })
            })
    }
}

export const checkLogin = (user, history) => {
    return(dispatch) => {
        let configObj = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(user)
        }

        dispatch({type: 'LOADING'})
        fetch("http://localhost:3001/sessions", configObj)
            .then(response => {return response.json()})
            .then(verifiedUser => {
                if(verifiedUser.errors === undefined) {
                    dispatch({type: 'LOGIN', user: verifiedUser.data})
                    let subjects = verifiedUser.included.filter(obj => obj.type === "subject")
                    let messages = verifiedUser.included.filter(obj => obj.type === "message")
                    dispatch({type: 'ADD_SUBJECTS', subjects: subjects})
                    dispatch({type: 'ADD_MESSAGES', messages: messages})
                    dispatch({type: 'LOADING_DONE'})
                    history.push('/user')
                } else {
                    dispatch({type: 'DISPLAY_ERRORS', errors: verifiedUser.errors})
                    dispatch({type: 'LOADING_DONE'})
                }
            })
    }
}

export const signNewUser = (user, history) => {
    return(dispatch) => {
        let configObj = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(user)
        }

        dispatch({type: 'LOADING'})
        if(user.userSelectOption === null) {
            dispatch({type: 'DISPLAY_ERRORS', errors: {user: ["must be student or instructor"]}})
        } else {
            fetch(`http://localhost:3001/${user.userSelectOption}s`, configObj)
            .then(response => {return response.json()})
            .then(newUser => {
                if(newUser.errors === undefined) {
                    dispatch({type: 'LOGIN', user: newUser.data})
                    if(newUser.data.type === "student") {
                        dispatch({type: 'ADD_STUDENT', student: newUser.data})
                    } else {
                        dispatch({type: 'ADD_INSTRUCTOR', instructor: newUser.data})
                    }
                    dispatch({type: 'LOADING_DONE'})
                    history.push('/user')
                } else {
                    dispatch({type: 'DISPLAY_ERRORS', errors: newUser.errors})
                    dispatch({type: 'LOADING_DONE'})
                }
            })
        }
    }
}

export const loadSubjectInfo = (id) => {
    return(dispatch) => {
        dispatch({type: 'LOADING'})
        fetch(`http://localhost:3001/subjects/${id}`)
            .then(response => {return response.json()})
            .then(subject => {
                let lectures = subject.included.filter(lec => lec.type === "lecture")
                lectures.forEach((lec) => {
                    let updatedContent = lec.attributes.content.split("\n")
                    lec.attributes.content = updatedContent
                    dispatch({type: 'ADD_LECTURE', lecture: lec})
                })
                dispatch({type: 'SET_CURRENT_SUBJECT', subject: subject.data})
                dispatch({type: 'LOADING_DONE'})
            })
    }
}

export const addLecture = (lecture) => {
    return(dispatch) => {
        let configObj = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(lecture)
        }

        dispatch({type: 'LOADING'})
        fetch("http://localhost:3001/lectures", configObj)
            .then(response => {return response.json()})
            .then(newLecture => {
                dispatch({type: 'START_CLASS', lecture: newLecture.data})
                dispatch({type: 'LOADING_DONE'})
            })
    }
}

export const addSubject = (subject) => {
    return(dispatch) => {
        let configObj = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(subject)
        }

        dispatch({type: 'LOADING'})
        fetch("http://localhost:3001/subjects", configObj)
            .then(response => {return response.json()})
            .then(newSubject => {
                if(newSubject.errors === undefined) {
                    dispatch({type: 'ADD_SUBJECT', subject: newSubject.data})
                    dispatch({type: 'LOADING_DONE'})
                } else {
                    dispatch({type: 'DISPLAY_ERRORS', errors: newSubject.errors})
                    dispatch({type: 'LOADING_DONE'})
                }
            })
    }
}

export const updateClassLecture = (lectureInfo, id) => {
    return(dispatch) => {
        let configObj = {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(lectureInfo)
        }

        dispatch({type: 'LOADING'})
        fetch(`http://localhost:3001/lectures/${id}`, configObj)
            .then(response => {return response.json()})
            .then(updatedLecture => {
                let updatedContent = updatedLecture.data.attributes.content.split("\n")
                updatedLecture.data.attributes.content = updatedContent
                dispatch({type: 'START_CLASS', lecture: updatedLecture.data})
                dispatch({type: 'LOADING_DONE'})
            })
    }
}

export const addMessage = (message) => {
    return(dispatch) => {
        let configObj = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(message)
        }

        dispatch({type: 'LOADING'})
        fetch("http://localhost:3001/messages", configObj)
            .then(response => {return response.json()})
            .then(newMessage => {
                if(newMessage.errors === undefined) {
                    dispatch({type: 'ADD_MESSAGE', message: newMessage.data})
                    dispatch({type: 'LOADING_DONE'})
                } else {
                    dispatch({type: 'DISPLAY_ERRORS', errors: newMessage.errors})
                    dispatch({type: 'LOADING_DONE'})
                }
            })
    }
}

export const loadMessages = (type, id) => {
    return(dispatch) => {
        dispatch({type: 'LOADING'})
        fetch(`http://localhost:3001/${type}/${id}`)
            .then(response => {return response.json()})
            .then(studentInfo => {
                dispatch({type: 'ADD_MESSAGES', messages: studentInfo.included})
                dispatch({type: 'LOADING_DONE'})
            })
    }
}

export const addEnrollment = (emailObj, subjectId) => {
    return(dispatch) => {
        let configObj = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                email: emailObj.email,
                subjectId: subjectId
            })
        }

        dispatch({type: 'LOADING'})
        fetch("http://localhost:3001/enrollments", configObj)
            .then(response => {return response.json()})
            .then(newEnrollment => {
                if(newEnrollment.errors === undefined) {
                    let student = newEnrollment.included.find(obj => obj.type === "student")
                    dispatch({type: 'UPDATE_STUDENT', student: student})
                    dispatch({type: 'LOADING_DONE'})
                } else {
                    dispatch({type: 'DISPLAY_ERRORS', errors: newEnrollment.errors})
                    dispatch({type: 'LOADING_DONE'})
                }
            })
    }
}