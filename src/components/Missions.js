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
    const missions = require('../data/missions.json');
    this.setState(() => ({ missions }));
  } // componentDidMount

  render(){
    const { missions } = this.state;
    const { showAll, numberShown } = this.props;

    if (showAll){
      return (
        <div className="container mt-3 mb-0">
          {missions.map((mission) => <Mission key={mission.dayNumber} {...mission}/>)}
        </div>
      );
    }

    if (!showAll && numberShown){
      return (
        <div className="container mt-3 mb-0">
          {missions.slice(0, 5).map((mission) => <Mission key={mission.dayNumber} {...mission} />)}
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
