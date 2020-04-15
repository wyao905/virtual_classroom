import React, {Component} from 'react'
import {connect} from 'react-redux'
import Subject from './subject'
import SubjectForm from './subjectForm'
import {loadSubjectInfo, loadMessages, addSubject} from '../../actions/fetchActions'
import {clearLectureContent, setMessagedTarget} from '../../actions/regularActions'

class SubjectsContainer extends Component {
    showNewSubjectForm = () => {
        if(this.props.currentUser.type === "instructor") {
            return <SubjectForm currentUser={this.props.currentUser} addSubject={this.props.addSubject}/>
        } else {
            return null
        }
    }

    showSubjects = () => {
        return this.props.subjects.map(sub => {
            return <Subject
                id={sub.id}
                name={sub.attributes.name}
                handleClick={this.handleClick}/>
        })
    }

    handleClick = (id) => {
        this.props.loadSubjectInfo(id)
        this.props.clearLectureContent()
        if(this.props.currentUser.type === "student") {
            this.props.setMessagedTarget(id)
            this.props.loadMessages("students", this.props.currentUser.id)
        }
    }

    render() {
        return(
            <div>
                {this.showNewSubjectForm()}
                {this.showSubjects()}
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        currentUser: state.currentUser,
        currentSubject: state.currentSubject,
        subjects: state.subjects
    }
}

const mapDispatchToProps = dispatch => {
    return {
        loadSubjectInfo: (id) => dispatch(loadSubjectInfo(id)),
        clearLectureContent: () => dispatch(clearLectureContent()),
        setMessagedTarget: (id) => dispatch(setMessagedTarget(id)),
        loadMessages: (userType, userId) => dispatch(loadMessages(userType, userId)),
        addSubject: (subject) => dispatch(addSubject(subject))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SubjectsContainer)