export const initialFetch = () => {
    return(dispatch) => {
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

export const checkLogin = () => {
    return(dispatch) => {
        dispatch({type: 'LOADING'})
        // need to add new custom route for login, then send new fetch request with user info passed in
        // newUnitModel = new Unit(unitForm.getElementsByClassName("input-text")[0].value, newUnitTenant) //Ask why newUnitNum value is being passed from above
        //                 newUnitModel.address = currentCondo.address

        //                 let configObj = {
        //                     method: "POST",
        //                     headers: {
        //                         "Content-Type": "application/json",
        //                         "Accept": "application/json"
        //                     },
        //                     body: JSON.stringify(newUnitModel)
        //                 }

        //                 fetch("http://localhost:3000/units", configObj)
        //                     .then(function(response) {
        //                         return response.json();
        //                     })
        //                     .then(function(unit) {
        //                         addNewUnit(unit.data.attributes.number, unit.data.attributes.tenant_name, unit.data.id)
        //                     })
    }
}