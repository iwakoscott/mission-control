import React, { Component } from 'react';
import { parseTime } from '../utils/tools';
import { connect } from 'react-redux';

const TWENTY_FOUR_HRS = 1000*60*60*24;

class Countdown extends Component {

  constructor(props){
    super(props);
    this.state = {
      hours: 0,
      minutes: 0,
      seconds: 0,
      timerFinished: false,
    }
  }

  componentWillUnmount(){
    clearInterval(this.interval);
  }

  componentDidMount(){
    const recentPostDate = this.props.logs.logs[0].timeStamp;
    const recent_post = new Date(recentPostDate);
    const dayAfter = new Date(recent_post.getTime() + TWENTY_FOUR_HRS);

    this.interval = setInterval(() => {
      const now = Date.now();
      const diff = dayAfter.getTime() - now;
      this.setState(parseTime(diff));
    }, 1000);
  } // componentDidMount

  render(){
    const { hours, minutes, seconds, timerFinished } = this.state;

    if (timerFinished){
      clearInterval(this.interval);
      return <h3 className="spaced-out">Times up! Mission Failed...</h3>;
    }

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

export default connect(state => ({ logs: state.logs }))(Countdown);
