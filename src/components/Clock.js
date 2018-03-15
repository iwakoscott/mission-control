import React, { Component } from 'react';
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
      <div className="col-sm-4 mt-3">
        <h3 id="day">{day}</h3>
        <h4 id="date">{date}</h4>
        <h4 id="time">{time}</h4>
      </div>
    );
  } // render

} // Clock

export default Clock;
