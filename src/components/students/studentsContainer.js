import React, {Component} from 'react'
import {connect} from 'react-redux'
import Student from './student'
import {setMessagedTarget} from '../../actions/regularActions'
import {loadMessages} from '../../actions/fetchActions'

class StudentsContainer extends Component {
    showStudents = () => {
        return this.props.students.map(stu => {
            let studentSubjects = stu.relationships.subjects.data.map(sub => sub.id)
            if(studentSubjects.includes(this.props.subject.id)) {
                return <Student
                    id={stu.id}
                    name={stu.attributes.name}
                    email={stu.attributes.email}
                    handleClick={this.handleClick}/>
            } else {
                return null
            }
        })
    }

    handleClick = id => {
        if(this.props.user.type === "instructor") {
            this.props.setMessagedTarget(id)
            this.props.loadMessages("instructors", this.props.user.id)
        }
    }

    render() {
        return(
            <div>
                {this.showStudents()}
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setMessagedTarget: (id) => dispatch(setMessagedTarget(id)),
        loadMessages: (userType, userId) => dispatch(loadMessages(userType, userId))
    }
}

export default connect(null, mapDispatchToProps)(StudentsContainer)