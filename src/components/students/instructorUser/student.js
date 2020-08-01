import React from 'react'

function Student(props) {
    return <button className="student-cards" id={props.id} onClick={() => props.handleClick(props.id)}>
        {props.name}
    </button>;
}

export default Student