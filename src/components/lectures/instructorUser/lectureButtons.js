import React from 'react'

function LectureButtons(props) {
    return <div className="lecture">
        {`Date: ${props.date}`}
        <button className="lecture-button" id={props.id} onClick={() => props.handleClick(props.id)}>{props.title}</button>
    </div>
}

export default LectureButtons