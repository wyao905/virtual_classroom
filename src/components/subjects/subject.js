import React from 'react'

function Subject(props) {
    return <button id={props.id} onClick={() => props.handleClick(props.id)}>{props.name}</button>;
}

export default Subject