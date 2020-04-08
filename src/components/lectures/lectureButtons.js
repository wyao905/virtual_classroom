import React from 'react'

function LectureButtons(props) {
    return <div>
        {`Date: ${props.date}`}
        <button id={props.id} onClick={() => props.handleClick(props.id)}>{props.title}</button>
    </div>
}

export default LectureButtons