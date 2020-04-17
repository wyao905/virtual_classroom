import './App.css'
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"

import {initialFetch, checkLogin, signNewUser} from './actions/fetchActions'
import {clearErrors} from './actions/regularActions'
import Login from './components/login'
import NewUserForm from './components/newUserForm'
import Body from './components/body'
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
    // console.log(this.props.state)
    return (
      <Router>
        <Link to="/">Home</Link>
        <Link to="/signup">SignUp</Link>

        <Switch>
          <Route path="/signup">
            <NewUserForm signNewUser={this.props.signNewUser}/>
          </Route>
          <Route path="/">
            <Login checkLogin={this.props.checkLogin}/>
          </Route>
        </Switch>
        <ul>{this.showErrors()}</ul>
        <Body/>
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
    checkLogin: (user) => dispatch(checkLogin(user)),
    signNewUser: (user) => dispatch(signNewUser(user)),
    clearErrors: () => dispatch(clearErrors())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
