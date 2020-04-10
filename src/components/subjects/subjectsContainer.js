import React, {Component} from 'react'
import {connect} from 'react-redux'
import Subject from './subject'
import {loadSubjectInfo, loadMessages} from '../../actions/fetchActions'
import {clearLectureContent, setMessagedUser} from '../../actions/regularActions'

class SubjectsContainer extends Component {
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
            let selectedSubject = this.props.subjects.find(sub => sub.id === id)
            this.props.setMessagedUser(selectedSubject.relationships.instructor.data.id)
            this.props.loadMessages("students", this.props.currentUser.id)
        }
    }

    render() {
        return(
            <div>
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
        setMessagedUser: (id) => dispatch(setMessagedUser(id)),
        loadMessages: (userType, userId) => dispatch(loadMessages(userType, userId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SubjectsContainer)