import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAndHandleLog, updateAndHandleLog } from '../actions/log';
import { formatedTimeStamp } from '../utils/tools';
import { Redirect } from 'react-router-dom';

class EditLog extends Component {

  constructor(props){
    super(props);
    this.state = {
      title: '',
      body : ''
    };
  } // constructor

  componentWillMount(){
    const { day } = this.props.match.params;
    this.props.dispatch(fetchAndHandleLog(day));
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
    const { log } = this.props.log;
    const { title, body } = this.state;
    this.props.dispatch(updateAndHandleLog({
      ...log,
      title: title.length === 0 ? log.title : title,
      body: body.length === 0 ? log.body : body
    }, () => this.props.history.push('/admin')));

  } // handleSubmit

  render(){
    const { title, body } = this.state;
    const { isFetching, log, error } = this.props.log;
    const timeStampFormatted = log !== null ? formatedTimeStamp(log.timeStamp) : null;

    if (error !== null) {
      return <Redirect
                to={{
                  pathname: "/403",
                  state: { from: this.props.location }
                }}/>;
    }

    return (
      <div className="container mt-3 mb-3">
        <div className="row">
          <div className="col-lg-8 offset-lg-2">

            {
              isFetching
                ? <div className="card">
                    <div className="card-body">
                      <h1 className="card-title spaced-out">Loading...</h1>
                    </div>
                  </div>
                : <div className="card">
                    <div className="card-body">
                      <h1 className="card-title spaced-out">{`Day ${log.day}`}</h1>
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
                              placeholder={log.title}
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
                            placeholder={log.body}
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
              }
          </div>
        </div>
      </div>
    );
  } // render

}


export default connect(state => ({ log: state.log }))(EditLog);
