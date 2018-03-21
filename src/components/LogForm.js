import React, { Component } from 'react';
import Missions from './Missions';
import { connect } from 'react-redux';
import { handleCreateLog } from '../actions/logs';
import { formatTweet } from '../utils/tools';

const initialState = {
  title: '',
  body: '',
  timeStamp: null,
  day: 0
}

class LogForm extends Component {
  constructor(props){
    super(props);
    this.state = {...initialState}
  }

  handleOnChange = (e) => {
    const value = e.target.value;
    const key = e.target.id;
    return {
      [key]: value
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState(() => ({ timeStamp: Date.now(), day: this.props.logs.logs.length }), () => {
      const log = this.state;
      this.props.dispatch(handleCreateLog(log));
      window.open(`https://twitter.com/intent/tweet?text=${formatTweet(log.day)}&hashtags=100daysofcode`);
      this.setState(() => ({...initialState}));
    });
  }

  render(){
    const { title, body } = this.state;
    const day = this.props.logs.logs.length;

    return (
      <div className="container mt-3">
        <div className="row">
          <div className="col-lg-8 offset-lg-2">
            <div className="card">
              <div className="card-body">
                <h1 className="card-title text-center spaced-out">
                  Mission Log
                </h1>
                <h3 className="card-subtitle text-muted mt-3 mb-3 spaced-out">{`Day ${day}`}</h3>
                <form onSubmit={this.handleSubmit}>
                  <div className="input-group mb-3">
                      <div className="input-group-prepend">
                        <span className="input-group-text">title</span>
                      </div>
                      <input
                        className="form-control"
                        id="title"
                        required
                        value={title}
                        type="text"
                        placeholder="enter a log title"
                        onChange={(e) => this.setState(this.handleOnChange(e))}
                      />
                  </div>
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">body</span>
                    </div>
                    <textarea
                      style={{"resize": "none"}}
                      className="form-control"
                      id="body"
                      required
                      value={body}
                      type="text"
                      placeholder="enter your log"
                      rows={7}
                      onChange={(e) => this.setState(this.handleOnChange(e))}
                    ></textarea>
                  </div>
                  <button
                    className="btn btn-secondary btn-block spaced-out mt-3"
                    disabled={ title === '' || body === '' }
                    type="submit">
                      Complete Mission
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <h6 className="spaced-out text-muted mb-2 mt-4 text-center">Recent Logs</h6>
        <Missions />
      </div>
    );
  }
}

export default connect(state => ({ logs: state.logs} ))(LogForm);
