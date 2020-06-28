import React from 'react'

function Student(props) {
    return <button className="student-cards" id={props.id}>
        {props.name}<br/>
        {props.email}
    </button>;
}

export default Student