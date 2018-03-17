import React, { Component } from 'react';
import Mission from './Mission';
import PropTypes from 'prop-types';

class Missions extends Component {

  constructor(props){
    super(props);
    this.state = {
      missions: []
    };
  } // constructor

  componentDidMount(){
    // dispatch(handleFetchLogs())
      // dispatch(fetchingLogs())
      //
    const missions = require('../data/missions.json');
    this.setState(() => ({ missions }));
  } // componentDidMount

  render(){
    const { missions } = this.state;
    const { showAll, numberShown } = this.props;

    if (showAll){
      return (
        <div className="container mt-3 mb-0">
          <div className="row">
            <div className="col col-lg-6 offset-lg-3">
              {missions.map((mission) => <Mission key={mission.dayNumber} {...mission}/>)}
            </div>
          </div>
        </div>
      );
    }

    if (!showAll && numberShown){
      return (
        <div className="container mt-3 mb-0">
          <div className="row">
            <div className="col col-lg-6 offset-lg-3">
              {missions.slice(0, 5).map((mission) => <Mission key={mission.dayNumber} {...mission} />)}
            </div>
          </div>
        </div>
      );
    }
  } // render

} // Missions


Missions.propTypes = {
  showAll: PropTypes.bool.isRequired,
  numberShown: PropTypes.number
}

export default Missions;
