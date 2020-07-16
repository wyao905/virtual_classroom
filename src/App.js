import './App.css'
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"

import {initialFetch, checkLogin, signNewUser} from './actions/fetchActions'
import {clearErrors, clearCurrentState} from './actions/regularActions'
import Login from './components/login'
import NewUserForm from './components/newUserForm'
import StudentBody from './components/studentBody'
import InstructorBody from './components/instructorBody'
import Error from './components/error'

class App extends Component {
  componentDidMount() {
    this.props.initialFetch()
  }

  showErrors = () => {
    if(!!this.props.state.displayErrors) {
      let keys = Object.keys(this.props.state.displayErrors)
      let values = Object.values(this.props.state.displayErrors)

      setTimeout(
        function() {this.props.clearErrors()}.bind(this),
        5000)

      return keys.map((key, i) => {
        let errorMsg = `${key} ${values[i]}`
        let errorMsgCap = errorMsg.charAt(0).toUpperCase() + errorMsg.slice(1)
        return <Error error={errorMsgCap}/>
      })
    } else {
      return null
    }
  }
  
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/signup">
            <NewUserForm signNewUser={this.props.signNewUser}/>
          </Route>
          <Route path="/student">
            <StudentBody clearCurrentState={this.props.clearCurrentState}/>
          </Route>
          <Route path="/instructor">
            <InstructorBody/>
          </Route>
          <Route path="/">
            <Login checkLogin={this.props.checkLogin}/>
          </Route>
        </Switch>
        <ul className="errors">{this.showErrors()}</ul>
      </Router>
    )
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
    checkLogin: (user, history) => dispatch(checkLogin(user, history)),
    signNewUser: (user, history) => dispatch(signNewUser(user, history)),
    clearErrors: () => dispatch(clearErrors()),
    clearCurrentState: () => dispatch(clearCurrentState())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
