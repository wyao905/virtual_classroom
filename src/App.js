import './App.css'
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {initialFetch} from './actions/fetchActions'
import Login from './components/login'

class App extends Component {
  componentDidMount() {
    this.props.initialFetch()
  }

  render() {
    return (
      <div className="App">
        <Login students={this.props.state.students} instructors={this.props.state.instructors}/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    state
  }
}

const mapDispatchToProps = dispatch => {
  return {
    initialFetch: () => dispatch(initialFetch())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
