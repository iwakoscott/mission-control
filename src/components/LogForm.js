import React, { Component } from 'react';
import Missions from './Missions';

const initialState = {
  title: '',
  body: ''
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

  render(){
    const { title, body } = this.state;
    return (
      <div className="container mt-3">
        <div className="card">
          <div className="card-body">
            <h1 className="card-title text-center spaced-out">
              Mission Log
            </h1>
            <h3 className="card-subtitle text-muted mt-3 mb-3">Day 0</h3>
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
                type="submit">
                  Complete Mission
              </button>
            </form>
          </div>
        </div>
        <div className="container">
          <h6 className="spaced-out text-muted mb-3 mt-3">Recent Logs</h6>
          <Missions showAll={false} numberShown={5}/>
        </div>
      </div>
    );
  }
}

export default LogForm;
