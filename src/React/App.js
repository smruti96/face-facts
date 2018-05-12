import React, { Component } from 'react';
import Login from './Login'
import Profile from './Profile'
import {connect} from 'react-redux'

function mapStateToProps(state){
  return {
    loggedIn: state.loggedIn
  }
} 

class App extends Component {
  render() {
    return (
      <div style={{height:'100vh'}}>
        {this.props.loggedIn ? <Profile />: <Login /> }
      </div>
    );
  }
}

export default connect(mapStateToProps)(App);
