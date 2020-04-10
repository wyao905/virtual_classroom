import React, {Component} from 'react'
import {connect} from 'react-redux'
import SubjectsContainer from './subjects/subjectsContainer'
import LecturesContainer from './lectures/lecturesContainer'
import StudentsContainer from './students/studentsContainer'
import MessagesContainer from './messages/messagesContainer'

class Body extends Component {
    render() {
        return(
            <div>
                <SubjectsContainer
                    subjects={this.props.subjects}
                    user={this.props.currentUser}/>
                <LecturesContainer/>
                <StudentsContainer
                    students={this.props.students}
                    subject={this.props.currentSubject}/>
                <MessagesContainer
                    user={this.props.currentUser}/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        subjects: state.subjects,
        students: state.students,
        currentUser: state.currentUser,
        currentSubject: state.currentSubject
    }
}
  
export default connect(mapStateToProps)(Body)