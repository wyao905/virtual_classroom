import React, {Component} from 'react'
import {connect} from 'react-redux'
import SubjectsContainer from './subjects/subjectsContainer'
import LecturesContainer from './lectures/lecturesContainer'
import StudentsContainer from './students/studentsContainer'
import MessagesContainer from './messages/messagesContainer'

class Body extends Component {
    render() {
        return(
            <div>
                <SubjectsContainer/>
                <LecturesContainer/>
                <StudentsContainer
                    user={this.props.currentUser}
                    students={this.props.students}
                    subject={this.props.currentSubject}/>
                <MessagesContainer
                    user={this.props.currentUser}
                    subject={this.props.currentSubject}
                    messages={this.props.messages}
                    messagedTarget={this.props.messagedTarget}/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        students: state.students,
        messages: state.messages,
        currentUser: state.currentUser,
        currentSubject: state.currentSubject,
        messagedTarget: state.messagedTarget
    }
}
  
export default connect(mapStateToProps)(Body)