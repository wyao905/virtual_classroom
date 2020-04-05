import './App.css'
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {initialFetch} from './actions/fetchActions'

class App extends Component {
  componentDidMount() {
    this.props.initialFetch()
  }

  render() {
    return (
      <div className="App">
        Login Component
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
