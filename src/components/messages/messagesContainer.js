import React, {Component, useReducer} from 'react'
// import Student from './student'

class MessagesContainer extends Component {
    showMessageInput = () => {
        // relationships.instructor.data.id
        if(this.props.user.type === "student") {
            console.log(this.props.messages)
            // let relevantMessages = this.props.messages.filter(msg => {
            //     console.log(msg)
            // })


            // need to edit messages migration and make messages belong to subject, add associations as necessary, relevant messages should have subject id equal to current subject id
            // for instructors, relevant messages should be filtered by both student id and subject id
        } else {

        }
    }

    render() {
        return(
            <div>
                {this.showMessageInput()}
            </div>
        )
    }
}

export default MessagesContainer