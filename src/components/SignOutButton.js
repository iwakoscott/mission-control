import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { handleLogOutUser } from '../actions/users';

class SignOutButton extends Component {
  handleClick = () => this.props.dispatch(handleLogOutUser(() => this.props.history.push('/')))

  render(){
    return (
      <button
        className="btn btn-danger spaced-out"
        onClick={this.handleClick}>
        Sign out
      </button>
    );
  }
}

export default connect()(withRouter(SignOutButton));
