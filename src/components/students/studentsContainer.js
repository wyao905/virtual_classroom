import React, {Component} from 'react'
import {connect} from 'react-redux'
import Student from './student'
import {setMessagedUser} from '../../actions/regularActions'

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
            this.props.setMessagedUser(id)
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
        setMessagedUser: (id) => dispatch(setMessagedUser(id))
    }
}

export default connect(null, mapDispatchToProps)(StudentsContainer)