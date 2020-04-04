export const initialFetch = () => {
    return (dispatch) => {
        dispatch({type: 'LOADING_INITIAL'})
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