import React from "react";
import { connect } from "react-redux";

function getHours(milliseconds) {
  return Math.floor(milliseconds / 1000 / 60 / 60);
}

function Indicator(props) {
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

  if (props.missionComplete) {
    return (
      <div className="col col-xs-4 col-md-2 text-center mb-3">
        <h5 className="spaced-out">Status</h5>
        {diff !== null ? (
          <div className="d-flex justify-content-center">
            <i
              className="fa fa-circle fa-lg mr-2"
              style={{ color: "#C4E538" }}
            />
            <i
              className="fa fa-circle fa-lg mr-2"
              style={{ color: "#747d8c" }}
            />
            <i className="fa fa-circle fa-lg" style={{ color: "#747d8c" }} />
          </div>
        ) : (
          <i className="fa fa-spinner fa-spin fa-1x" />
        )}
      </div>
    );
  }

  return (
    <div className="col col-xs-4 col-md-2 text-center mb-3">
      <h5 className="spaced-out">Status</h5>
      {diff !== null ? (
        <div className="d-flex justify-content-center">
          <i className="fa fa-circle fa-lg mr-2" style={styleGreen} />
          <i className="fa fa-circle fa-lg mr-2" style={styleYellow} />
          <i className="fa fa-circle fa-lg" style={styleRed} />
        </div>
      ) : (
        <i className="fa fa-spinner fa-spin fa-1x" />
      )}
    </div>
  );
}

export default connect(state => ({ countdown: state.countdown }))(Indicator);
