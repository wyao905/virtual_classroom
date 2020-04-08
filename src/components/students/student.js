import React from 'react'

function Student(props) {
    return <button id={props.id} onClick={() => props.handleClick(props.id)}>{props.name}</button>;
}

export default Student