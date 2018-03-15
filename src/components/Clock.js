import React, { Component, Fragment } from 'react';
import { parseTime } from '../utils/tools';
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
      this.setState(parseTime(now));
    }, 1000);
  } // componentDidMount

  componentWillUnmount(){
     clearInterval(this.interval);
  } // componentWillUnmount

  render(){
    const { date, day, time } = this.state;
    return (
      <Fragment>
        <div className="col col-md-2 offset-md-3">
          <h5 className="spaced-out" id="day">{day}</h5>
          <h5 id="date">{date}</h5>
          <h5 id="time">{time}</h5>
        </div>
        <div className="col col-md-2 d-flex justify-content-center">
          <h5 className="spaced-out">Day 0</h5>
        </div>
        <div className="col col-md-2 d-flex justify-content-center">
          <h5 className="spaced-out">Status</h5>
        </div>
      </Fragment>
    );
  } // render

} // Clock

export default Clock;
