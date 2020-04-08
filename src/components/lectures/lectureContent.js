import React from 'react'

function LectureContent(props) {
    return <div>
        <h3>{props.title}</h3>
        {`Date: ${props.date}`}
        <p>{props.content}</p>
    </div>
}

export default LectureContent