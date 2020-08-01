import React from 'react'

function Message(props) {
    return <li className="message">
        {props.origin}
        {props.target.attributes.name} ({props.target.attributes.email})
        <p>{props.content}</p>
        Date: {props.date} Time: {props.time}
    </li>
}

export default Message