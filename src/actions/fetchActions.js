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
                } else {
                    console.log(verifiedUser.error)
                }
            })
    }
}