import React, {Component} from 'react'
import {connect} from 'react-redux'
import Lecture from './lecture'
import {loadLectureInfo} from '../../actions/fetchActions'

class LecturesContainer extends Component {
    showLectures = () => {
        return this.props.lectures.map(lec => {
            if(lec.relationships.subject.data.id === this.props.subject.id) {
                return <Lecture
                    id={lec.id}
                    date={lec.attributes.created_at.split("T")[0]}
                    title={lec.attributes.title}
                    content={lec.attributes.content}
                    handleClick={this.handleClick}/>
            } else {
                return null
            }
        })
    }

    // handleClick = (id) => {
    //     this.props.loadSubjectInfo(id)
    // }

    render() {
        return(
            <div>
                {this.showLectures()}
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        loadLectureInfo: (id) => dispatch(loadLectureInfo(id))
    }
}

export default connect(null, mapDispatchToProps)(LecturesContainer)