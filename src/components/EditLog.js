import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateAndHandleLog } from '../actions/log';
import { formatedTimeStamp } from '../utils/tools';

class EditLog extends Component {

  constructor(props){
    super(props);
    this.state = {
      title: '',
      body : '',
      timeStamp: null,
      day: null,
    };
  } // constructor

  componentDidMount(){
    const { day } = this.props.match.params
    this.setState(() => ({...this.props.location.state, day}));
  }

  handleOnChange(event) {
    const value = event.target.value;
    const key = event.target.id;
    this.setState(() => ({
      [key]: value
    }));
  } // handleOnChange

  handleSubmit = event => {
    event.preventDefault();
    this.props.dispatch(updateAndHandleLog({
      ...this.state
    }, () => this.props.history.push('/admin')));

  } // handleSubmit

  render(){
    const { title, body, timeStamp, day } = this.state;
    const timeStampFormatted = formatedTimeStamp(timeStamp);

    return (
      <div className="container mt-3 mb-3">
        <div className="row">
          <div className="col-lg-8 offset-lg-2">
              <div className="card">
                <div className="card-body">
                  <h1 className="card-title spaced-out">{`Day ${day}`}</h1>
                  <p className="text-muted small mt-1 mb-3">{timeStampFormatted}</p>
                  <form onSubmit={this.handleSubmit}>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                          <span className="input-group-text">title</span>
                        </div>
                        <input
                          className="form-control"
                          id="title"
                          value={title}
                          placeholder={title}
                          type="text"
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
                        placeholder={body}
                        value={body}
                        type="text"
                        rows={7}
                        onChange={(e) => this.setState(this.handleOnChange(e))}
                      ></textarea>
                    </div>
                    <button
                      className="btn btn-secondary btn-block spaced-out mt-3"
                      type="submit">
                        Edit Log
                    </button>
                  </form>
                </div>
              </div>
          </div>
        </div>
      </div>
    );
  } // render

}


export default connect()(EditLog);
