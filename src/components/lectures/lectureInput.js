import React, {Component} from 'react'

class LectureInput extends Component {
    state = {
        content: ""
    }

    lectureInput = () => {
        if(this.props.class === "in session") {
            return <form onSubmit={event => this.handleSubmit(event)}>
                {/* <input */}
                <input type="submit" value="Send" />
            </form>
        } else {
            return null
        }
    }

    classSessionButtons = () => {
        if(this.props.classSession) {
            return <button>End</button>
        } else {
            return <button>Start</button>
        }
    }

    handleChange = event => {
        this.setState({
            content: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        let newLecture = {
            content: this.state.content
        }
        this.props.addLecture(newLecture)
        this.setState({
            content: ""
        })
    }

    handleStartClass = id => {

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

export default LectureInput