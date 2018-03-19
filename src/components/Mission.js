import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

class Mission extends Component {
  render(){
    const { title, body, day, timeStamp } = this.props;
    const formatedTimeStamp = moment(new Date(timeStamp)).format('MM.DD.YY @ H:mm:ss');
    return (
      <div className="card mb-3 mt-3">
        <div className="card-body">
          <h5 className="card-title spaced-out">{`Day ${day}`}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{title}</h6>
          <p className="card-text">{body}</p>
          <p className="small float-right text-muted font-italic">{formatedTimeStamp}</p>
        </div>
      </div>
    );
  }
}

Mission.propTypes = {
  timeStamp: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  day: PropTypes.number.isRequired
}

export default Mission;
