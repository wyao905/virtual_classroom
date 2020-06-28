import React from 'react'

function LectureContentHead(props) {
    return <div>
        <h3>{props.title}</h3>
        {`Date: ${props.date}`}
    </div>
}

export default LectureContentHead