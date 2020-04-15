import './App.css'
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {initialFetch, checkLogin, signNewUser} from './actions/fetchActions'
import {displayLoginForm, displayCreateForm} from './actions/regularActions'
import CreateFormButton from './components/createFormButton'
import LoginFormButton from './components/loginFormButton'
import Login from './components/login'
import NewUserForm from './components/newUserForm'
import Body from './components/body'

class App extends Component {
  componentDidMount() {
    this.props.initialFetch()
  }

  showLoginLogoutCreate = () => {
    if(this.props.state.currentUser.id === undefined) {
      if(this.props.state.displayedForm === "login") {
        return <Login checkLogin={this.props.checkLogin}/>
      } else {
        return <NewUserForm signNewUser={this.props.signNewUser}/>
      }
    } else {
      return <form><input type="submit" value="Logout"/></form>
    }
  }
  
  showFormButtons = () => {
    if(this.props.state.currentUser.id === undefined) {
      if(this.props.state.displayedForm === "login") {
        return <CreateFormButton handleClick={this.handleClick}/>
      } else {
        return <LoginFormButton handleClick={this.handleClick}/>
      }
    } else {
      return null
    }
  }

  handleClick = state => {
    if(state === "login") {
      this.props.displayLoginForm()
    } else {
      this.props.displayCreateForm()
    }
  }
  
  render() {
    // console.log(this.props.state)
    return (
      <div className="App">
        {this.showFormButtons()}
        {this.showLoginLogoutCreate()}
        <Body/>
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
    checkLogin: (user) => dispatch(checkLogin(user)),
    displayLoginForm: () => dispatch(displayLoginForm()),
    displayCreateForm: () => dispatch(displayCreateForm()),
    signNewUser: (user) => dispatch(signNewUser(user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
