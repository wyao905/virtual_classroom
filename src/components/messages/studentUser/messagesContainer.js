import React, {Component} from 'react'
import Message from './message'
import MessageInput from './messageInput'

class MessagesContainer extends Component {
    showMessage = () => {
        if(this.props.messagedTarget !== "") {
            if(this.props.user.type === "student") {
                let displayMessages = this.props.messages.filter(msg => msg.relationships.subject.data.id === this.props.messagedTarget)
                if(displayMessages.length > 0) {
                    let sorted = displayMessages.sort((a, b) => (a.created_at < b.created_at) ? 1 : -1)
                    return sorted.map(msg => {
                        let origin
                        if(msg.attributes.sender === "student") {
                            origin = "Sent to: "
                        } else {
                            origin = "Received from: "
                        }
                        return <ul><Message
                            origin={origin}
                            content={msg.attributes.content}
                            target={this.props.instructors.find(i => i.id === msg.relationships.instructor.data.id)}
                            date={msg.attributes.created_at.split("T")[0]}
                            time={msg.attributes.created_at.split("T")[1]}/></ul>
                    })
                } else {
                    return null
                }
            } else {
                let displayMessages = this.props.messages.filter(msg => msg.relationships.student.data.id === this.props.messagedTarget)
                if(displayMessages.length > 0) {
                    let sorted = displayMessages.sort((a, b) => (a.created_at < b.created_at) ? 1 : -1)
                    return sorted.map(msg => {
                        let origin
                        if(msg.attributes.sender === "instructor") {
                            origin = "Sent to: "
                        } else {
                            origin = "Received from: "
                        }
                        return <ul><Message
                            origin={origin}
                            content={msg.attributes.content}
                            target={this.props.students.find(s => s.id === msg.relationships.student.data.id)}
                            date={msg.attributes.created_at.split("T")[0]}
                            time={msg.attributes.created_at.split("T")[1]}/></ul>
                    })
                } else {
                    return null
                }
            }
        } else {
            return null
        }
    }

    showMessageInput = () => {
        if(this.props.messagedTarget !== "") {
            return <MessageInput/>
        } else {
            return null
        }        
    }

    render() {
        return(
            <div>
                {this.showMessage()}
                {this.showMessageInput()}
            </div>
        )
    }
}

export default MessagesContainer