import React, { Component } from 'react';
import Clock from './Clock';
import Countdown from './Countdown';
import Missions from './Missions';
import { connect } from 'react-redux';

class MissionControl extends Component {

  render(){
    const isFetched = this.props.logs.logs.length;
    return (
      <div>
        <div className="jumbotron jumbotron-fluid text-center mb-0" style={{background: "#7f8c8d", color: "white"}}>
          <h1 className="display-5 spaced-out">
            Mission Control
          </h1>
          {
            isFetched
              ? <Countdown />
              : <h4 className="spaced-out text-muted text-center">...</h4>
          }
          <p className="lead">&#35;100daysofcode</p>
        </div>
        <div className="container-fluid">
          <div className="row row-dashboard pt-3 justify-content-md-center">
            <Clock />
          </div>
        </div>
        <h6 className="spaced-out text-muted mb-3 mt-3 text-center">Logs</h6>
        <Missions />
      </div>
    );
  } // render

} // MissionControl


export default connect(state => ({ logs: state.logs }))(MissionControl);
