import React, {Component} from 'react'

class EnrollmentForm extends Component {
    state = {
        email: ""
    }

    showForm = () => {
        return <form onSubmit={event => this.handleSubmit(event)}>
            <label>Enter Student Email: </label>
            <input type="text"
                   name="content"
                   value={this.state.email}
                   onChange={event => this.handleChange(event)}/>
            <input type="submit" value="Send" />
        </form>
    }

    handleChange = event => {
        this.setState({
            email: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        let newEnrollmentEmail = this.state
        this.props.addEnrollment(newEnrollmentEmail, this.props.subject.id)
        this.setState({
            email: ""
        })
    }

    render() {
        return(
            <div>{this.showForm()}</div>
        )
    }
}

export default EnrollmentForm