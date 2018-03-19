/*
  dispatch(handleSignOut())
    dispatch(signOut())
    auth.doSignOut()
      .then(
        this.props.history.push('/login');
      ).catch((error) => dispatch(logoutFail()))
*/

import React, { Component } from 'react';
import firebase from 'firebase';
import { connect } from 'react-redux';
import { unAuthUser } from '../actions/users';

class SignOutButton extends Component {
  handleClick = () => {
    // Build a thunk later
    firebase.auth().signOut();
    this.props.dispatch(unAuthUser());
    this.props.history.push('/');
  }

  render(){
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-4 offset-lg-4">
            <button
              className="btn btn-danger btn-block spaced-out mt-1"
              onClick={this.handleClick}>
              Sign out
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(SignOutButton);
