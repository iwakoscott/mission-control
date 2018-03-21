import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class AdminButton extends Component {

  handleClick = (e) => this.props.history.push('/admin');

  render(){
    return (
      <button
        className="btn btn-secondary spaced-out"
        onClick={this.handleClick}>
        Admin
      </button>
    );
  }

}

export default withRouter(AdminButton);
