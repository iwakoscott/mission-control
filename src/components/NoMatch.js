import React, { Component } from 'react';


class NoMatch extends Component {

  render(){
    return (
      <div className="container p-5">
        <h4 className="mb-5 mt-5 text-center"><i className="fa fa-map-signs mb-5"></i><br />404: Oops, you find yourself marooned on a strange planet.</h4>
        <p className="lead">Mission Control...</p>
        <div className="text-center">
          <button
            className="btn btn-danger btn-lg spaced-out"
            onClick={() => this.props.history.push('/')}>
            Take me Home
          </button>
        </div>
      </div>
    );
  }
}

export default NoMatch;
