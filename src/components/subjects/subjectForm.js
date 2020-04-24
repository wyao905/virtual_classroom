import React, {Component} from 'react'

class SubjectForm extends Component {
    state = {
        name: ""
    }

    showForm = () => {
        return <form onSubmit={event => this.handleSubmit(event)}>
            <label>Add new subject:</label>
            <input className="input-text" name="name" type="text" onChange={event => this.handleChange(event)}/>
            <input type="submit" value="Add"/>
        </form>
    }

    handleChange = event => {
        this.setState({
            name: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        let newSubject = this.state
        newSubject.instructor_id = this.props.currentUser.id
        this.props.addSubject(newSubject)
        this.setState({
            name: ""
        })
    }

    render() {
        return(
            <div>{this.showForm()}</div>
        )
    }
}

export default SubjectForm