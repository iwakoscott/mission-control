import React, { Component } from 'react';
import Mission from './Mission';

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
    return (
      <div className="container mt-3 mb-0">
        {missions.map((mission) => (<Mission key={mission.dayNumber} {...mission}/>))}
      </div>
    );
  } // render

} // Missions

export default Missions;
