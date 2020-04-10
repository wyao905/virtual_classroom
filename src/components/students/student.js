import React from 'react'

function Student(props) {
    return <div className="student-cards" id={props.id}>{props.name}<br/>{props.email}</div>;
}

export default Student