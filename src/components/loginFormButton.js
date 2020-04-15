import React from 'react'

function LoginFormButton(props) {
    return <button className="new-user" onClick={() => props.handleClick("login")}>Login</button>;
}

export default LoginFormButton