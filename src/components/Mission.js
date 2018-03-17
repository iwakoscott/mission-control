import React, { Component } from 'react';
import moment from 'moment';

class Mission extends Component {
  render(){
    const { dayNumber, log, timeStamp } = this.props;
    const formatedTimeStamp = moment(new Date(timeStamp)).format('MM.DD.YY @ H:mm:ss');
    return (
      <div className="card mb-3 mt-3">
        <div className="card-body">
          <h5 className="card-title spaced-out">{`Day ${dayNumber}`}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{log.title}</h6>
          <p className="card-text">{log.body}</p>
          <p className="small">{formatedTimeStamp}</p>
        </div>
      </div>
    );
  }
}

export default Mission;