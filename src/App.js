import './App.css'
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {initialFetch, checkLogin} from './actions/fetchActions'
import Login from './components/login'
import Body from './components/body'

class App extends Component {
  componentDidMount() {
    this.props.initialFetch()
  }

  render() {
    console.log(this.props.state)
    return (
      <div className="App">
        <Login checkLogin={this.props.checkLogin}/>
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
    checkLogin: (user) => dispatch(checkLogin(user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
