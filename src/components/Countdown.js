import React, { Component } from 'react';
import { parseTime } from '../utils/tools';

class Countdown extends Component {

  constructor(props){
    super(props);
    this.state = {
      hours: 0,
      minutes: 0,
      seconds: 0,
      finished: false
    }
  }

  componentDidMount(){
    const recentPostDate = require('../data/missions.json')[0].timeStamp;
    const start = new Date(recentPostDate);
    const dayAfter = new Date(start.getTime() + 1000*60*60*24);
    this.interval = setInterval(() => {
      const now = Date.now();
      const diff = dayAfter.getTime() - now;
      this.setState(parseTime(diff));
    }, 1000);
  } // componentDidMount

  render(){
    const { hours, minutes, seconds, finished } = this.state;
    return (
      <div>
        <h3 className="spaced-out">Time Left</h3>
        <span className="h2">{ hours < 10 ? `0${hours}` : hours }</span>
        <span className="lead">&#58;</span>
        <span className="h2">{ minutes < 10 ? `0${minutes}` : minutes }</span>
        <span className="lead">&#58;</span>
        <span className="h2">{ seconds < 10 ? `0${seconds}` : seconds }</span>
      </div>
    );
  } // render
}

export default Countdown;
