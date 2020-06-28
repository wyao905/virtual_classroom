import React from 'react'

function Message(props) {
    return <li>
        {props.origin}
        {props.target.attributes.name}
        {props.target.attributes.email}
        <p>{props.content}</p>
        {props.date}
        {props.time}
    </li>
}

export default Message