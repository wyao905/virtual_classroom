import React from 'react'

function JoinClassButton(props) {
    return <button className="session-button" onClick={props.handleClick}>{props.buttonText}</button>
}

export default JoinClassButton