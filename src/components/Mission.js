import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { formatedTimeStamp } from '../utils/tools';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Mission extends Component {
  render(){
    const { title, body, day, timeStamp, users } = this.props;
    const { isAnonymous } = users;
    const formattedTime = formatedTimeStamp(timeStamp);
    return (
      <div className="card mb-3 mt-3">
        <div className="card-body">
          <h5 className="card-title spaced-out">{`Day ${day}`}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{title}</h6>
          <p className="card-text">{body}</p>
          <p className="small text-muted font-italic">{formattedTime}</p>
          {
            isAnonymous
              ? null
              : <Link to={`/edit-log/${day}`}><i className="fa fa-edit fa-fw float-right"></i></Link>
          }
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

export default connect(state => ({ users: state.users }))(Mission);
