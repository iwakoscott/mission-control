import React, { Component } from 'react';
import { connect } from 'react-redux';

function Indicator(props){
  const styleRed = {
    color: props.mission.complete ? "#b33939" : "#ff3f34"
  };

  const styleGreen = {
    color: props.misson.complete ? "#0be881" : "#218c74"
  }

  return (
    <div className="col col-xs-4 col-md-2 text-center mb-3">
      <h5 className="spaced-out">Status</h5>
      <div className="d-flex justify-content-center">
        <i className="green fa fa-circle fa-lg mr-2" style={styleGreen}></i>
        <i className="red fa fa-circle fa-lg" style={styleRed}></i>
      </div>
    </div>
  );
}

function mapStateToProps({ mission }){
  return {
    mission
  };
}

export default connect(mapStateToProps)(Indicator);
