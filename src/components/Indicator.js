import React from 'react';
import { connect } from 'react-redux';

function getHours(milliseconds){
  return Math.floor(milliseconds/1000/60/60);
}

function Indicator(props){
  const { diff } = props.countdown;
  const hours = getHours(diff);
  const styleGreen = {
    color: hours > 12 && hours <= 24 ? "#C4E538" : "#747d8c"
  };
  const styleRed = {
    color: hours === 0 ? "#ff3f34" : "#747d8c"
  };
  const styleYellow = {
    color: hours > 0 && hours < 12 ? "#FFC312" : "#747d8c"
  };

  return (
    <div className="col col-xs-4 col-md-2 text-center mb-3">
      <h5 className="spaced-out">Status</h5>
      {
        diff !== null
          ?
            <div className="d-flex justify-content-center">
              <i className="green fa fa-circle fa-lg mr-2" style={styleGreen}></i>
              <i className="yellow fa fa-circle fa-lg mr-2" style={styleYellow}></i>
              <i className="red fa fa-circle fa-lg" style={styleRed}></i>
            </div>
          : <i className="fa fa-spinner fa-spin fa-1x"></i>
      }
    </div>
  );
}

export default connect(state => ({ countdown: state.countdown }))(Indicator);
