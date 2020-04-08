import React, {Component} from 'react'
import {connect} from 'react-redux'
import Subject from './subject'
import {loadSubjectInfo} from '../../actions/fetchActions'
import {clearLectureContent} from '../../actions/regularActions'

class SubjectsContainer extends Component {
    showSubjects = () => {
        return this.props.subjects.map(sub => {
            return <Subject
                id={sub.id}
                name={sub.attributes.name}
                handleClick={this.handleClick}/>
        })
    }

    handleClick = (id) => {
        this.props.loadSubjectInfo(id)
        this.props.clearLectureContent()
    }

    render() {
        return(
            <div>
                {this.showSubjects()}
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        loadSubjectInfo: (id) => dispatch(loadSubjectInfo(id)),
        clearLectureContent: () => dispatch(clearLectureContent())
    }
}

export default connect(null, mapDispatchToProps)(SubjectsContainer)