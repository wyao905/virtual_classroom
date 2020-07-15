import './Home.css'
import React, {Component} from 'react'
import {Link, withRouter} from "react-router-dom"
import Select from 'react-select'

class Login extends Component {
    state = {
        email: "",
        password: "",
        userSelectOption: null
    }

    handleChange = event => {
        let newStateProp = {}
        newStateProp[event.target.name] = event.target.value
        this.setState(newStateProp)
    }

    handleSelectChange = event => {
        this.setState({
            userSelectOption: event.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        let {history} = this.props
        this.props.checkLogin(this.state, history)
        this.setState({
            email: "",
            password: "",
            userSelectOption: null
        })
    }

    render() {
        return(
            <div>
                <div className="nav-link"><Link to="/signup">SignUp</Link></div>
                <form id="login-form" onSubmit={event => this.handleSubmit(event)}>
                    <label>Email:</label>
                    <input className="input-text" name="email" type='text' value={this.state.email} onChange={event => this.handleChange(event)}/>
                    <label>Password:</label>
                    <input className="input-text" name="password" type='password' value={this.state.password} onChange={event => this.handleChange(event)}/>
                    <br/>
                    <label>Login as student or instructor: </label>
                    <Select
                        className="select"
                        label={this.state.userSelectOption}
                        onChange={event => this.handleSelectChange(event)}
                        options={[
                            {value: 'student', label: 'Student'},
                            {value: 'instructor', label: 'Instructor'}
                        ]}
                    />
                    <br/>
                    <input type="submit" value="Login"/>
                </form>
            </div>
        )
    }
}

export default withRouter(Login)