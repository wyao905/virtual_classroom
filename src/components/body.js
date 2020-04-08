import React, {Component} from 'react'
import {connect} from 'react-redux'
import SubjectsContainer from './subjects/subjectsContainer'
import LecturesContainer from './lectures/lecturesContainer'
import StudentsContainer from './students/studentsContainer'

class Body extends Component {
    render() {
        return(
            <div>
                <SubjectsContainer
                    subjects={this.props.subjects}
                    user={this.props.currentUser}/>
                <LecturesContainer
                    lectures={this.props.lectures}
                    currentLecture={this.props.currentLecture}
                    subject={this.props.currentSubject}/>
                <StudentsContainer
                    students={this.props.students}
                    subject={this.props.currentSubject}/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        subjects: state.subjects,
        lectures: state.lectures,
        students: state.students,
        currentUser: state.currentUser,
        currentSubject: state.currentSubject,
        currentLecture: state.currentLecture
    }
}
  
export default connect(mapStateToProps)(Body)