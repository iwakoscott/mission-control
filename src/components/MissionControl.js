import React, { Component } from 'react';
import Clock from './Clock';

class MissionControl extends Component {

  render(){
    return (
      <div>
        <div className="jumbotron jumbotron-fluid text-center" style={{background: "#7f8c8d", color: "white"}}>
          <h1 className="display-5 spaced-out">
            Mission Control
          </h1>
        </div>
        <div className="container">
          <div className="row mt-3 justify-content-md-center">
            <Clock />
          </div>
        </div>
      </div>
    );
  } // render

} // MissionControl


export default MissionControl;
