import React, {Component} from 'react'
import {connect} from 'react-redux'
import SubjectsContainer from './subjects/subjectsContainer'

class Body extends Component {
    render() {
        return(
            <div>
                <SubjectsContainer subjects={this.props.subjects} user={this.props.currentUser}/>
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
  
export default connect(mapStateToProps)(Body)