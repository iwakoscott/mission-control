/*
  Still need to handle error!!!
*/
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAndHandleAuthedUser } from '../actions/users';

const initialState = {
  email: '',
  password: '',
  error: null
}

class SignInForm extends Component {

  constructor(props){
    super(props);
    this.state = { ...initialState };
  } // constructor

  handleSubmit = (e) => {
    e.preventDefault();
    const { dispatch } = this.props;
    const { email, password } = this.state;
    dispatch(fetchAndHandleAuthedUser(email, password));
  } // handleSubmit

  handleOnChange = (e) => {
    const value = e.target.value;
    const key = e.target.id;

    return {
      [key]: value
    }
  } // handleOnChange

  render(){
    const { email, password } = this.state;
    const isInvalid = email === '' || password === '';

    return (
      <form onSubmit={this.handleSubmit}>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text">&#64;</span>
            <input
              className="form-control"
              type="text"
              value={email}
              placeholder="email"
              id="email"
              onChange={(e) => this.setState(this.handleOnChange(e))}
            />
          </div>
        </div>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text"><i className="fa fa-lock"></i></span>
            <input
              className="form-control"
              type="password"
              value={password}
              placeholder="password"
              id="password"
              onChange={(e) => this.setState(this.handleOnChange(e))}
            />
          </div>
        </div>
        <button
          type="submit"
          disabled={isInvalid}
          className="btn btn-secondary btn-block spaced-out-lower">
          Sign In
        </button>
      </form>
    );
  } // render
}

export default connect()(SignInForm);
