import React from 'react'

function Student(props) {
    return <button className="student-cards-inactive" id={props.id}>
        {props.name}
    </button>;
}

export default Student