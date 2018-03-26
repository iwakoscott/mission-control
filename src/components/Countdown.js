import React, { Component } from 'react';
import { parseTime } from '../utils/tools';
import { connect } from 'react-redux';
import {
  tick,
  countdownStart,
  countDownEnd
} from '../actions/countdown';
import { handleDeleteAllLogs } from '../actions/logs';

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

  componentWillReceiveProps(nextProps){
    clearInterval(this.interval);
    const { dispatch } = nextProps;
    const recentPostDate = nextProps.logs.logs[0].timeStamp;
    const recent_post = new Date(recentPostDate);
    const dayAfter = new Date(recent_post.getTime() + TWENTY_FOUR_HRS);

    dispatch(countdownStart());
    this.interval = setInterval(() => {
      const now = Date.now();
      const diff = dayAfter.getTime() - now;

      if (diff === 0){
        clearInterval(this.interval);
        dispatch(countDownEnd());
        //dispatch(handleDeleteAllLogs());
      }

      this.setState(parseTime(diff), () => dispatch(tick(diff)));
    }, 1000);
  }

  componentWillUnmount(){
    clearInterval(this.interval);
  }

  componentDidMount(){
    const { dispatch } = this.props;
    const recentPostDate = this.props.logs.logs[0].timeStamp;
    const recent_post = new Date(recentPostDate);
    const dayAfter = new Date(recent_post.getTime() + TWENTY_FOUR_HRS);

    dispatch(countdownStart());
    this.interval = setInterval(() => {
      const now = Date.now();
      const diff = dayAfter.getTime() - now;

      if (diff <= 0){
        clearInterval(this.interval);
        dispatch(countDownEnd());
        //dispatch(handleDeleteAllLogs());
      }

      this.setState(parseTime(diff), () => dispatch(tick(diff)));
    }, 1000);
  } // componentDidMount

  render(){
    const { hours, minutes, seconds, timerFinished } = this.state;
    const { logs } = this.props.logs;
    const day = logs[0].day;

    if (timerFinished){
      if (day + 1 === 101) {
        return <h3>100 Days! Mission Complete!</h3>;
      } else {
        return <h3 className="spaced-out">Times up! Mission Failed...</h3>;
      }
    }

    return (
      <div>
        <h3 className="spaced-out">Time Left</h3>
        <span className="h2 time">{ hours < 10 ? `0${hours}` : hours }</span>
        <span className="lead colon">&#58;</span>
        <span className="h2 time">{ minutes < 10 ? `0${minutes}` : minutes }</span>
        <span className="lead colon">&#58;</span>
        <span className="h2 time">{ seconds < 10 ? `0${seconds}` : seconds }</span>
      </div>
    );
  } // render
}

export default connect(state => ({ logs: state.logs }))(Countdown);
