import React, { Component } from 'react';
import Mission from './Mission';
import { connect } from 'react-redux';

class Missions extends Component {

  render(){
    const missions = this.props.logs;

      if (missions.length === 0){
        return (
          <div className="text-center spaced-out small">No Missions!</div>
        );
      }

      return (
        <div className="container mt-3 mb-0">
          <div className="row">
            <div className="col col-lg-6 offset-lg-3">
              {missions.map((mission) => {
                console.log(mission);
                return <Mission key={mission.day} {...mission} />;
              })}
            </div>
          </div>
        </div>
      );

  } // render

} // Missions

export default connect(state => ({logs: state.logs}))(Missions);
