import React, {Component} from 'react'
import {connect} from 'react-redux'
import {addLecture, updateClassLecture} from '../../../actions/fetchActions'
import {endClass} from '../../../actions/regularActions'


class LectureInput extends Component {
    state = {
        title: "",
        content: ""
    }

    lectureInput = () => {
        if(this.props.classSession) {
            if(this.props.classLecture.attributes.title === "") {
                return <form onSubmit={event => this.handleSubmit(event)}>
                    <label>Enter Lecture Title</label><br/>
                    <input name="title"
                           type="text"
                           value={this.state.title}
                           onChange={event => this.handleChange(event)}/>
                    <input type="submit" value="Send" />
                </form>
            } else {
                return <form onSubmit={event => this.handleSubmit(event)}>
                    <label>Enter Lecture Content</label><br/>
                    <textarea name="content"
                              value={this.state.content}
                              onChange={event => this.handleChange(event)}/>
                    <input type="submit" value="Send" />
                </form>
            }
        } else {
            return null
        }
    }

    classSessionButtons = () => {
        if(this.props.classSession) {
            return <button className="session-button" onClick={this.handleEndClass}>End Class</button>
        } else {
            return <button className="session-button" onClick={this.handleStartClass}>Start Class</button>
        }
    }

    handleChange = event => {
        let newStateProp = {}
        newStateProp[event.target.name] = event.target.value
        this.setState(newStateProp)
    }

    handleSubmit = event => {
        event.preventDefault()
        this.props.updateClassLecture(this.state, this.props.classLecture.id)
        this.setState({
            title: "",
            content: ""
        })
    }

    handleStartClass = () => {
        let newLecture = this.state
        newLecture.subject_id = this.props.currentSubject.id
        this.props.addLecture(newLecture)
        this.setState({
            subject_id: this.props.currentSubject.id
        })
    }

    handleEndClass = () => {
        this.props.endClass()
        this.setState({
            title: "",
            content: "",
            subject_id: ""
        })
    }

    render() {
        return(
            <div>
                {this.classSessionButtons()}
                {this.lectureInput()}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        classSession: state.classSession,
        classLecture: state.classLecture,
        currentSubject: state.currentSubject
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addLecture: (lecture) => dispatch(addLecture(lecture)),
        updateClassLecture: (updatedLectureInfo, classLectureId) => dispatch(updateClassLecture(updatedLectureInfo, classLectureId)),
        endClass: () => dispatch(endClass())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LectureInput)