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

export const checkLogin = (user) => {
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
                if(verifiedUser.error === undefined) {
                    dispatch({type: 'LOGIN', user: verifiedUser.data})
                    let subjects = verifiedUser.included.filter(obj => obj.type === "subject")
                    dispatch({type: 'ADD_SUBJECTS', subjects: subjects})
                    dispatch({type: 'LOADING_DONE'})
                } else {
                    dispatch({type: 'LOADING_DONE'})
                    console.log(verifiedUser.error)
                }
            })
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
                    dispatch({type: 'ADD_LECTURE', lecture: lec})
                })
                dispatch({type: 'SET_CURRENT_SUBJECT', subject: subject.data})
                dispatch({type: 'LOADING_DONE'})
            })
    }
}

export const loadLectureInfo = (id) => {
    return(dispatch) => {
        console.log(id)
    }
}