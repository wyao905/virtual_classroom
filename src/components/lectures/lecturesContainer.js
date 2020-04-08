import React, {Component} from 'react'
import {connect} from 'react-redux'
import LectureButtons from './lectureButtons'
import LectureContent from './lectureContent'
import LectureInput from './lectureInput'
import {addLecture} from '../../actions/fetchActions'
import {displayLectureContent} from '../../actions/regularActions'

class LecturesContainer extends Component {
    showLectureButtons = () => {
        return this.props.lectures.map(lec => {
            if(lec.relationships.subject.data.id === this.props.subject.id) {
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

    showLectureInput = () => {
        console.log(this.props.currentUser)
        if(this.props.currentUser.type === "instructor") {
            return <LectureInput addLecture={this.props.addLecture}/>
        } else {
            return null
        }
    }

    handleClick = (id) => {
        this.props.displayLectureContent(id)
    }

    render() {
        return(
            <div>
                {this.showLectureButtons()}
                {this.showLectureContent()}
                {this.showLectureInput()}
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        displayLectureContent: (id) => dispatch(displayLectureContent(id)),
        addLecture: (lecture) => dispatch(addLecture(lecture))
    }
}

export default connect(null, mapDispatchToProps)(LecturesContainer)