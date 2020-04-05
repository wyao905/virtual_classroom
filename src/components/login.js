import React, {Component} from 'react'
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
    }

    render() {
        return(
            <form>
                <input name="email" type='text' value={this.state.email} onChange={event => this.handleChange(event)}/>
                <input name="password" type='password' value={this.state.password} onChange={event => this.handleChange(event)}/>
                <Select
                    value={this.state.userSelectOption}
                    onChange={event => this.handleSelectChange(event)}
                    options={[
                        {value: 'student', label: 'Student'},
                        {value: 'instructor', label: 'Instructor'}
                ]}/>
                <input type="submit" value="Submit" />
            </form>
        )
    }
}

export default Login