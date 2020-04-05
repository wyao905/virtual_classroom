import React, {Component} from 'react'

class Login extends Component {
    state = {
        email: "",
        password: ""
    }

    render() {
        return(
            <form>
                <input type='text' value={this.state.email}/>
                <input type='password' value={this.state.password}/>
                <
            </form>
        )
    }
}

export default Login