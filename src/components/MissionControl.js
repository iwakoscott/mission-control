import React, { Component } from 'react';
import Clock from './Clock';

class MissionControl extends Component {

  render(){
    return (
      <div className="container-fluid">
        <div className="row">
          <Clock />
        </div>
      </div>
    );
  } // render

} // MissionControl


export default MissionControl;
