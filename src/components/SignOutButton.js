import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { handleLogOutUser } from '../actions/users';

class SignOutButton extends Component {
  handleClick = () => this.props.dispatch(handleLogOutUser(() => this.props.history.push('/')))

  render(){
    return (
      <div className="container mb-2 mt-2">
        <div className="row">
          <div className="col-lg-4 offset-lg-4">
            <button
              className="btn btn-danger btn-block spaced-out"
              onClick={this.handleClick}>
              Sign out
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(withRouter(SignOutButton));
