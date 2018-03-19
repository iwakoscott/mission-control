import React, { Component } from 'react';
import Mission from './Mission';
import { connect } from 'react-redux';
import { fetchAndHandleLogs } from '../actions/logs';

class Missions extends Component {

  componentDidMount(){
    this.props.dispatch(fetchAndHandleLogs());
  }

  render(){
    const missions = this.props.logs.logs;
    const { isFetching } = this.props.logs;

    return (
      <div className="container mt-3 mb-0">
        <div className="row">
          <div className="col col-lg-6 offset-lg-3">
            {
              isFetching
              ? <h4 className="text-center text-muted spaced-out">Loading...</h4>
              : missions.map((mission) => <Mission key={mission.day} {...mission} />)
            }
          </div>
        </div>
      </div>
    );

  } // render

} // Missions

export default connect(state => ({logs: state.logs}))(Missions);
