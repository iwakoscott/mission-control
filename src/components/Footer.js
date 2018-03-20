import React from 'react';

const Footer = props =>
  <div className="container-fluid mb-3">
    <div className="row">
      <div className="col col-sm-6 offset-sm-3 text-center">
        <p className="small spaced-out" style={{color: '#2f3640'}}>Made by Satoshi</p>
      </div>
    </div>
    <div className="row">
      <div className="col col-sm-6 offset-sm-3 text-center">
        <i className="fa fa-twitter mr-2" style={{"color": "#00aced", "verticalAlign": "middle"}}></i>
        <a className="small at-tag spaced-out-lower" href="https://twitter.com/theisomorphic">&#64;{"theisomorphic"}</a>
      </div>
    </div>
  </div>

export default Footer;
