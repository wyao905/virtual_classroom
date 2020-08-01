import React, {Component} from 'react'
// import {connect} from 'react-redux'
import Student from './student'
// import EnrollmentForm from './enrollmentForm'
// import {setMessagedTarget} from '../../actions/regularActions'
// import {loadMessages, addEnrollment} from '../../actions/fetchActions'

class StudentsContainer extends Component {
    showStudents = () => {
        return this.props.students.map(stu => {
            let studentSubjects = stu.relationships.subjects.data.map(sub => sub.id)
            if(studentSubjects.includes(this.props.subject.id)) {
                return <Student
                    key={stu.id}
                    id={stu.id}
                    name={stu.attributes.name}
                    // handleClick={this.handleClick}
                    />
            } else {
                return null
            }
        })
    }

    // enrollStudent = () => {
    //     if(this.props.user.type === "instructor" && !!this.props.subject.id) {
    //         return <EnrollmentForm
    //             addEnrollment={this.props.addEnrollment}
    //             subject={this.props.subject}/>
    //     } else {
    //         return null
    //     }
    // }

    // handleClick = id => {
    //     if(this.props.user.type === "instructor") {
    //         this.props.setMessagedTarget(id)
    //         this.props.loadMessages("instructors", this.props.user.id)
    //     }
    // }

    render() {
        return(
            <div id="student-cards-container">
                {this.showStudents()}
                {/* {this.enrollStudent()} */}
            </div>
        )
    }
}

// const mapDispatchToProps = dispatch => {
//     return {
//         setMessagedTarget: (id) => dispatch(setMessagedTarget(id)),
//         loadMessages: (userType, userId) => dispatch(loadMessages(userType, userId)),
//         addEnrollment: (email, subjectId) => dispatch(addEnrollment(email, subjectId))
//     }
// }

// export default connect(null, mapDispatchToProps)(StudentsContainer)
export default StudentsContainer