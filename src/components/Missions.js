import React, { Component } from 'react';
import Mission from './Mission';
import Loading from './Loading';
import { connect } from 'react-redux';
import { fetchAndHandleLogs } from '../actions/logs';

class Missions extends Component {

  componentDidMount(){
    this.props.dispatch(fetchAndHandleLogs(101));
  }

  render(){
    const { isFetching, logs } = this.props.logs;
    return (
      <div className="container mt-3 mb-0">
        <div className="row">
          <div className="col col-lg-6 offset-lg-3">
            {
              isFetching
              ? <Loading />
              : logs.map(log => <Mission key={log.day} {...log} />)
            }
          </div>
        </div>
      </div>
    );

  } // render

} // Missions

export default connect(state => ({logs: state.logs}))(Missions);
