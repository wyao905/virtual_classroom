import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from "react-router-dom"
import SubjectsContainer from './subjects/studentUser/subjectsContainer'
import LecturesContainer from './lectures/lecturesContainer'
import StudentsContainer from './students/studentsContainer'
import MessagesContainer from './messages/messagesContainer'

class Body extends Component {
    render() {
        return(
            <div>
                <Link className="nav-link" to="/" onClick={() => this.props.clearCurrentState()}>Logout</Link>
                <div id="body">
                    <SubjectsContainer/>
                    <LecturesContainer/>
                    <StudentsContainer
                        user={this.props.currentUser}
                        students={this.props.students}
                        subject={this.props.currentSubject}/>
                    <MessagesContainer
                        user={this.props.currentUser}
                        students={this.props.students}
                        instructors={this.props.instructors}
                        subject={this.props.currentSubject}
                        messages={this.props.messages}
                        messagedTarget={this.props.messagedTarget}/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        students: state.students,
        instructors: state.instructors,
        messages: state.messages,
        currentUser: state.currentUser,
        currentSubject: state.currentSubject,
        messagedTarget: state.messagedTarget
    }
}
  
export default connect(mapStateToProps)(Body)