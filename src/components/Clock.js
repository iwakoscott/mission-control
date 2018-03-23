import React, { Component, Fragment } from 'react';
import Indicator from './Indicator';
import { parseDateTime } from '../utils/tools';
import { connect } from 'react-redux';

class Clock extends Component {

  constructor(props){
    super(props);
    this.state = {
      day: null,
      date: null,
      time: null
    }
  } // constructor

  componentDidMount(){
    this.interval = setInterval(() => {
      const now = new Date(Date.now());
      this.setState(parseDateTime(now));
    }, 1000);
  } // componentDidMount

  componentWillUnmount(){
     clearInterval(this.interval);
  } // componentWillUnmount

  render(){
    const { date, day, time } = this.state;
    const { logs } = this.props.logs;
    return (
      <Fragment>
        <div className="col col-xs-4 col-md-2">
          <h5 className="spaced-out" id="day">{day}</h5>
          <h5 id="date">{date}</h5>
          <h5 className="time">{time}</h5>
        </div>
        <div className="col col-xs-4 col-md-2 d-flex justify-content-center text-center">
          <h5 className="spaced-out">
            {`Day ${logs.length}`}
          </h5>
        </div>
        <Indicator />
      </Fragment>
    );
  } // render

} // Clock

export default connect(state => ({ logs: state.logs }))(Clock);
