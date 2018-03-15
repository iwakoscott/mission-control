import React, { Component } from 'react';
import Clock from './Clock';

class MissionControl extends Component {

  render(){
    return (
      <div>
        <div className="jumbotron jumbotron-fluid text-center mb-0" style={{background: "#7f8c8d", color: "white"}}>
          <h1 className="display-5 spaced-out">
            Mission Control
          </h1>
          <p className="lead">&#35;100daysofcode</p>
        </div>
        <div className="container-fluid">
          <div className="row row-dashboard pt-3 justify-content-md-center">
            <Clock />
          </div>
        </div>
      </div>
    );
  } // render

} // MissionControl


export default MissionControl;
