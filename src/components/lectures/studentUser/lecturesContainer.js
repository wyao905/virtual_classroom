import React, {Component} from 'react'
import {connect} from 'react-redux'
import LectureButtons from '../lectureButtons'
import JoinClassButton from './joinClassButton'
import LectureContent from '../lectureContent'
import LectureContentHead from '../lectureContentHead'
import {displayLectureContent, joinClass, leaveClass} from '../../../actions/regularActions'
import {reloadLecture} from '../../../api'

class LecturesContainer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            classLectureTitle: "",
            classLectureContent: "",
            classLectureDate: ""
        }

        //sends component state to socket
        reloadLecture((lec) => {
            this.setState({ 
                classLectureTitle: lec.attributes.title,
                classLectureContent: lec.attributes.content,
                classLectureDate: lec.attributes.created_at
            })
        })
    }
    
    //filters through lectures in store and show lecture button if the lecture's subject id matches the current subject id
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

    //filters through lectures in store and shows lecture content if the lecture's id matches the current lecture id
    //calls contentBody function to ensure newline spaces are properly displayed
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

    //shows the ongoing class lecture content
    showClassLectureContent = () => {
        // need to figure out issue with student class lectures not updating properly
        if(this.props.joinSession) {
            return <div>
                <LectureContentHead
                date={this.state.classLectureDate.split("T")[0]}
                title={this.state.classLectureTitle}/>
                {this.contentBody(this.state.classLectureContent)}
            </div>
        } else {
            return null
        }
    }

    //function needed for preserving newline spaces in lecture content display
    //lectureContent is stored as an array with each array entry as a paragraph
    contentBody = (lectureContent) => {
        if(Array.isArray(lectureContent)) {
            return lectureContent.map(content => {
                return <LectureContent content={content}/>
            })
        } else {
            return null
        }
    }

    //shows the join class button for students
    showLectureInput = () => {
        if(this.props.joinSession) {
            return <JoinClassButton
                handleClick={this.handleLeaveClass}
                buttonText={"Leave Class"}/>
        } else {
            return <JoinClassButton
                handleClick={this.handleJoinClass}
                buttonText={"Join Class"}/>
        }
    }

    //displays lecture content when lecture is clicked
    handleClick = id => {
        this.props.displayLectureContent(id)
    }

    //sets store state joinSession to true indicating student user is in class
    handleJoinClass = () => {
        this.props.joinClass()
    }

    //sets store state joinSession to false indicating student user is not in class
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