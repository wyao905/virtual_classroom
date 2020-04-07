import React, {Component} from 'react'
import {connect} from 'react-redux'
import SubjectsContainer from './subjects/subjectsContainer'
import LecturesContainer from './lectures/lecturesContainer'

class Body extends Component {
    render() {
        return(
            <div>
                <SubjectsContainer subjects={this.props.subjects} user={this.props.currentUser}/>
                <LecturesContainer lectures={this.props.lectures} subject={this.props.currentSubject}/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        subjects: state.subjects,
        lectures: state.lectures,
        currentUser: state.currentUser,
        currentSubject: state.currentSubject
    }
}
  
export default connect(mapStateToProps)(Body)