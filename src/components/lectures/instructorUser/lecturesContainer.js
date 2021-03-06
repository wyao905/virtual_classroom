import React, {Component} from 'react'
import {connect} from 'react-redux'
import LectureButtons from '../lectureButtons'
import LectureContent from '../lectureContent'
import LectureContentHead from '../lectureContentHead'
import LectureInput from './lectureInput'
import {displayLectureContent} from '../../../actions/regularActions'
import {reloadLecture} from '../../../api'

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
        if(this.props.classSession) {
            return <div>
                <LectureContentHead
                date={this.props.classLecture.attributes.created_at.split("T")[0]}
                title={this.props.classLecture.attributes.title}/>
                {this.contentBody(this.props.classLecture.attributes.content)}
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

    //shows the lecture input component for instructors
    showLectureInput = () => {
        if(this.props.currentSubject.id !== undefined) {
            return <LectureInput/>
        } else {
            return null
        }
    }

    //displays lecture content when lecture is clicked
    handleClick = id => {
        this.props.displayLectureContent(id)
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
        classLecture: state.classLecture
    }
}

const mapDispatchToProps = dispatch => {
    return {
        displayLectureContent: (id) => dispatch(displayLectureContent(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LecturesContainer)