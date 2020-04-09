import React from 'react'

function ClassLectureContent(props) {
    return <div>
        <h3>{props.title}</h3>
        {`Date: ${props.date}`}
        <p id="class-lecture-content">{props.content}</p>
    </div>
}

export default ClassLectureContent