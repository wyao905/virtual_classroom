import React, {Component} from 'react'
import {connect} from 'react-redux'
import Select from 'react-select'
import {addMessage} from '../../actions/fetchActions'

class MessageInput extends Component {
    state = {
        content: ""
    }

    showForm = () => {
        return <form onSubmit={event => this.handleSubmit(event)}>
            <label>Sender: {}</label>
            <textarea name="content"
                      value={this.state.content}
                      onChange={event => this.handleChange(event)}/>
            <input type="submit" value="Send" />
        </form>
    }

    handleChange = event => {
        this.setState({
            content: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        let newMessage = this.state
        this.props.addMessage(newMessage)
        this.setState({
            content: ""
        })
    }

    render() {
        return(
            <div>{this.showForm()}</div>
        )
    }
}

const mapStateToProps = state => {
    return {
        students: state.students,
        instructors: state.instructors,
        messages: state.messages,
        currentUser: state.currentUser,
        currentSubject: state.currentSubject,
        messagedTarget: state.messagedTarget                
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addMessage: (message) => dispatch(addMessage(message))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageInput)