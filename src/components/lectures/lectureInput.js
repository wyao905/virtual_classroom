import React, {Component} from 'react'
import {connect} from 'react-redux'
import {addLecture, updateClassLecture} from '../../actions/fetchActions'


class LectureInput extends Component {
    state = {
        title: "",
        content: "",
        subject_id: this.props.currentSubject.id
    }

    lectureInput = () => {
        if(this.props.classSession) {
            if(this.props.classLecture.attributes.title === "") {
                return <form onSubmit={event => this.handleSubmit(event)}>
                    <input name="title"
                           type="text"
                           value={this.state.title}
                           onChange={event => this.handleChange(event)}/>
                    <input type="submit" value="Send" />
                </form>
            } else {
                return <form onSubmit={event => this.handleSubmit(event)}>
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
            return <button onClick={this.handleEndClass}>End</button>
        } else {
            return <button onClick={this.handleStartClass}>Start</button>
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
        this.props.addLecture(this.state)
    }

    handleEndClass = id => {

    }

    render() {
        return(
            <div>
                {this.lectureInput()}
                {this.classSessionButtons()}
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
        updateClassLecture: (updatedLectureInfo, classLectureId) => dispatch(updateClassLecture(updatedLectureInfo, classLectureId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LectureInput)