import React, {Component} from 'react'
import {connect} from 'react-redux'
import Subject from '../subject'
import SubjectForm from './subjectForm'
import {loadSubjectInfo, loadMessages, addSubject} from '../../../actions/fetchActions'
import {clearLectureContent, setMessagedTarget, clearMessagedTarget} from '../../../actions/regularActions'

class SubjectsContainer extends Component {
    showNewSubjectForm = () => {
        return <SubjectForm currentUser={this.props.currentUser} addSubject={this.props.addSubject}/>
    }

    showSubjects = () => {
        return this.props.subjects.map(sub => {
            return <Subject
                key={sub.id}
                id={sub.id}
                name={sub.attributes.name}
                handleClick={this.handleClick}
            />
        })
    }

    handleClick = (id) => {
        this.props.loadSubjectInfo(id)
        this.props.clearMessagedTarget()
        this.props.clearLectureContent()
    }

    render() {
        return(
            <div id="subjects-container">
                <h3>Subjects</h3>
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
        clearMessagedTarget: () => dispatch(clearMessagedTarget()),
        loadMessages: (userType, userId) => dispatch(loadMessages(userType, userId)),
        addSubject: (subject) => dispatch(addSubject(subject))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SubjectsContainer)