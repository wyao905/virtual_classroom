import React from 'react'

function ClassLectureContentHead(props) {
    return <div>
        <h3>{props.title}</h3>
        {`Date: ${props.date}`}
    </div>
}

export default ClassLectureContentHead