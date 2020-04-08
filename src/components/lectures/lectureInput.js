import React, {Component} from 'react'

class LectureInput extends Component {
    state = {
        content: ""
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

    render() {
        return(
            <form onSubmit={event => this.handleSubmit(event)}>
                {/* <input */}
                <input type="submit" value="Submit" />
            </form>
        )
    }
}

export default Login