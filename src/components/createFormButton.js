import React from 'react'

function CreateFormButton(props) {
    return <button className="new-user" onClick={() => props.handleClick("create")}>Create New User</button>;
}

export default CreateFormButton