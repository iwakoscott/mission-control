import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class MissionControlButton extends Component {

  handleClick = (e) => {
    this.props.history.push('/');
  };

  render(){
    return (
      <button
        className="btn btn-secondary spaced-out"
        onClick={this.handleClick}>
        M.C.
      </button>
    );
  }

}

export default withRouter(MissionControlButton);
