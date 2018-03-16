import React from 'react';

export default function Indicator(props){
  const styleRed = {
    color: props.complete ? "#b33939" : "#ff3f34"
  };

  const styleYellow = {
    color: props.complete ? "#0be881" : "#218c74"
  }

  return (
    <div className="col col-xs-4 col-md-2 text-center mb-3">
      <h5 className="spaced-out">Status</h5>
      <div className="d-flex justify-content-center">
        <i className="yellow fa fa-circle fa-lg mr-2" style={styleYellow}></i>
        <i className="red fa fa-circle fa-lg" style={styleRed}></i>
      </div>
    </div>
  );
}
