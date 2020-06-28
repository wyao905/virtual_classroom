import React, {Component} from 'react'
import {connect} from 'react-redux'
import LectureButtons from './lectureButtons'
import JoinClassButton from './joinClassButton'
import LectureContent from './lectureContent'
import LectureContentHead from './lectureContentHead'
import LectureInput from './lectureInput'
import {displayLectureContent, joinClass, leaveClass} from '../../actions/regularActions'
import {reloadLecture} from '../../api'

class LecturesContainer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            classLectureTitle: "",
            classLectureContent: "",
            classLectureDate: ""
        }

        reloadLecture((lec) => {
            this.setState({ 
                classLectureTitle: lec.attributes.title,
                classLectureContent: lec.attributes.content,
                classLectureDate: lec.attributes.created_at
            })
        })
    }
    

    showLectureButtons = () => {
        return this.props.lectures.map(lec => {
            if(lec.relationships.subject.data.id === this.props.currentSubject.id) {
                return <LectureButtons
                    key={lec.id}
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
                return <div>
                    <LectureContentHead
                        date={lec.attributes.created_at.split("T")[0]}
                        title={lec.attributes.title}/>
                    {this.contentBody(lec.attributes.content)}
                    </div>
            } else {
                return null
            }
        })
    }

    showClassLectureContent = () => {
        // need to figure out issue with student class lectures not updating properly
        if(this.props.classSession || this.props.joinSession) {
            if(this.props.currentUser.type === "instructor") {
                return <div>
                    <LectureContentHead
                    date={this.props.classLecture.attributes.created_at.split("T")[0]}
                    title={this.props.classLecture.attributes.title}/>
                    {this.contentBody(this.props.classLecture.attributes.content)}
                </div>
            } else {
                return <div>
                    <LectureContentHead
                    date={this.state.classLectureDate.split("T")[0]}
                    title={this.state.classLectureTitle}/>
                    {this.contentBody(this.state.classLectureContent)}
                </div>
            }
        } else {
            return null
        }
    }

    contentBody = (lectureContent) => {
        if(Array.isArray(lectureContent)) {
            return lectureContent.map(content => {
                return <LectureContent content={content}/>
            })
        } else {
            return null
        }
    }

    showLectureInput = () => {
        if(this.props.currentUser.type === "instructor" && this.props.currentSubject.id !== undefined) {
            return <LectureInput/>
        } else if(this.props.currentUser.type === "student") {
            if(this.props.joinSession) {
                return <JoinClassButton
                    handleClick={this.handleLeaveClass}
                    buttonText={"Leave Class"}/>
            } else {
                return <JoinClassButton
                    handleClick={this.handleJoinClass}
                    buttonText={"Join Class"}/>
            }
        } else {
            return null
        }
    }

    handleClick = id => {
        this.props.displayLectureContent(id)
    }

    handleJoinClass = () => {
        this.props.joinClass()
    }

    handleLeaveClass = () => {
        this.props.leaveClass()
    }

    render() {
        return(
            <div id="lectures-container">
                <div id="lecture-buttons">{this.showLectureButtons()}</div>
                {this.showLectureInput()}
                <div id="lecture">{this.showLectureContent()}</div>
                <div id="class-lecture">{this.showClassLectureContent()}</div>
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
        joinSession: state.joinSession,
        classLecture: state.classLecture
    }
}

const mapDispatchToProps = dispatch => {
    return {
        displayLectureContent: (id) => dispatch(displayLectureContent(id)),
        joinClass: () => dispatch(joinClass()),
        leaveClass: () => dispatch(leaveClass())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LecturesContainer)