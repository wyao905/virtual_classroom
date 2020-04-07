import React, {Component} from 'react'
import Subject from './subjects'

class SubjectsContainer extends Component {
    render() {
        console.log(this.props.state, this.props.state.currentUser)
        return(
            <div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        subjects: state.subjects,
        currentUser: state.currentUser
    }
}
  
export default SubjectsContainer