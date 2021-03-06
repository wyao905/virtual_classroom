import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from "react-router-dom"
import SubjectsContainer from './subjects/studentUser/subjectsContainer'
import LecturesContainer from './lectures/studentUser/lecturesContainer'
import StudentsContainer from './students/studentUser/studentsContainer'
import MessagesContainer from './messages/studentUser/messagesContainer'

class Body extends Component {
    render() {
        return(
            <div>
                <div className="nav-link"><Link to="/" onClick={() => this.props.clearCurrentState()}>Logout</Link></div>
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