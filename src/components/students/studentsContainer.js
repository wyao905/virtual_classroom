import React, {Component} from 'react'
import {connect} from 'react-redux'
import Student from './student'

class StudentsContainer extends Component {
    showStudents = () => {
        return this.props.students.map(stu => {
            let studentSubjects = stu.relationships.subjects.data.map(sub => sub.id)
            if(studentSubjects.includes(this.props.subject.id)) {
                return <Student
                    id={stu.id}
                    name={stu.attributes.name}
                    email={stu.attributes.email}/>
            } else {
                return null
            }
        })
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
}

export default connect(null, mapDispatchToProps)(StudentsContainer)