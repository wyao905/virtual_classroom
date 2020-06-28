import React, {Component} from 'react'
import {connect} from 'react-redux'
import {addMessage} from '../../../actions/fetchActions'

class MessageInput extends Component {
    state = {
        content: ""
    }

    showForm = () => {
        // let target
        // let targetSub
        // if(this.props.currentUser.type === "student") {
        let targetSub = this.props.subjects.find(sub => sub.id === this.props.messagedTarget)
        let target = this.props.instructors.find(ins => ins.id === targetSub.relationships.instructor.data.id)
        // } else {
        //     target = this.props.students.find(stu => stu.id === this.props.messagedTarget)
        //     targetSub = this.props.currentSubject
        // }
        return <form onSubmit={event => this.handleSubmit(event)}>
            <div>
                To: {target.attributes.name} <br/>
                Email: {target.attributes.email} <br/>
                Subject: {targetSub.attributes.name} <br/>
            </div>
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
        // if(this.props.currentUser.type === "student") {
        newMessage.sender = "student"
        newMessage.student = this.props.currentUser.id
        newMessage.instructor = this.props.currentSubject.relationships.instructor.data.id
        // } else {
        //     newMessage.sender = "instructor"
        //     newMessage.student = this.props.messagedTarget
        //     newMessage.instructor = this.props.currentUser.id
        // }
        newMessage.subject = this.props.currentSubject.id
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
        subjects: state.subjects,
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