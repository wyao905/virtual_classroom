import React, {Component} from 'react'
import {connect} from 'react-redux'
import LectureButtons from './lectureButtons'
import LectureContent from './lectureContent'
import ClassLectureContent from './classLectureContent'
import LectureInput from './lectureInput'
import {displayLectureContent} from '../../actions/regularActions'

class LecturesContainer extends Component {
    showLectureButtons = () => {
        return this.props.lectures.map(lec => {
            if(lec.relationships.subject.data.id === this.props.currentSubject.id) {
                return <LectureButtons
                id={lec.id}
                date={lec.attributes.created_at.split("T")[0]}
                title={lec.attributes.title}
                handleClick={this.handleClick}/>
            } else {
                return null
            }
        })
    }

    showLectureContent = () => {
        return this.props.lectures.map(lec => {
            if(this.props.currentLecture === lec.id) {
                return <LectureContent
                date={lec.attributes.created_at.split("T")[0]}
                title={lec.attributes.title}
                content={lec.attributes.content}/>
            } else {
                return null
            }
        })
    }

    showClassLectureContent = () => {
        if(this.props.classSession) {
            return <ClassLectureContent
                date={this.props.classLecture.attributes.created_at.split("T")[0]}
                title={this.props.classLecture.attributes.title}
                content={this.props.classLecture.attributes.content}/>
        } else {
            return null
        }
    }

    showLectureInput = () => {
        if(this.props.currentUser.type === "instructor" && this.props.currentSubject.id !== undefined) {
            return <LectureInput/>
        } else {
            return null
        }
    }

    handleClick = id => {
        this.props.displayLectureContent(id)
    }

    render() {
        return(
            <div>
                {this.showLectureButtons()}
                {this.showLectureContent()}
                {this.showClassLectureContent()}
                {this.showLectureInput()}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        lectures: state.lectures,
        currentUser: state.currentUser,
        currentSubject: state.currentSubject,
        currentLecture: state.currentLecture,
        classSession: state.classSession,
        classLecture: state.classLecture
    }
}

const mapDispatchToProps = dispatch => {
    return {
        displayLectureContent: (id) => dispatch(displayLectureContent(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LecturesContainer)