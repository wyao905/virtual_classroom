export const initialFetch = () => {
    return(dispatch) => {
        dispatch({type: 'LOADING'})
        fetch('http://localhost:3001/instructors')
            .then(response => {return response.json()})
            .then(responseInstructors => {
                let instructorList = responseInstructors.data
                fetch('http://localhost:3001/students')
                    .then(response => {return response.json()})
                    .then(responseStudents => {
                        dispatch({type: 'LOADING_DONE'})
                        dispatch({type: 'ADD_INSTRUCTORS', instructors: instructorList})
                        dispatch({type: 'ADD_STUDENTS', students: responseStudents.data})
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
                    dispatch({type: 'LOADING_DONE'})
                    dispatch({type: 'ADD_SUBJECTS', subjects: subjects})
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
                dispatch({type: 'LOADING_DONE'})
                // add lecture list to state (need to check lectures aren't added twice)
                // students and lectures for a subject will be obtained component side through props and matching ids
                let lectures = subject.included.filter(lec => lec.type === "lecture")
                lectures.forEach((lec) => {
                    dispatch({type: 'ADD_LECTURE', lecture: lec})
                })
                console.log(subject)
            })
    }
}