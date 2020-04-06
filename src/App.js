import './App.css'
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {initialFetch, checkLogin} from './actions/fetchActions'
import Login from './components/login'

class App extends Component {
  componentDidMount() {
    this.props.initialFetch()
  }

  render() {
    return (
      <div className="App">
        <Login checkLogin={this.props.checkLogin}/>
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
    initialFetch: () => dispatch(initialFetch()),
    checkLogin: (user) => dispatch(checkLogin(user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
