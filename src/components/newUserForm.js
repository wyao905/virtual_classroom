import './Home.css'
import React, {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'
import Select from 'react-select'

class NewUserForm extends Component {
    state = {
        name: "",
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
        this.props.signNewUser(this.state, history)
        this.setState({
            name: "",
            email: "",
            password: "",
            userSelectOption: null
        })
    }

    render() {
        return(
            <div>
                <div className="nav-link"><Link to="/">Home</Link></div>
                <form id="create-form" onSubmit={event => this.handleSubmit(event)}>
                    <label>Name:</label><br/>
                    <input className="input-text" name="name" type='text' value={this.state.name} onChange={event => this.handleChange(event)}/>
                    <br/>
                    <label>Email:</label><br/>
                    <input className="input-text" name="email" type='text' value={this.state.email} onChange={event => this.handleChange(event)}/>
                    <br/>
                    <label>Password:</label><br/>
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
                    <input type="submit" value="Create" />
                </form>
            </div>
        )
    }
}

export default withRouter(NewUserForm)