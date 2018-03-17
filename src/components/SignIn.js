/*
  Still need to handle error!!!
*/
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { auth } from '../firebase';

const SignInPage = ({ history }) =>
  <div className="container mt-5 d-flex justify-content-center align-items-center">
      <div className="card mt-5 mb-5">
        <div className="card-body text-center p-5">
          <h1 className="card-title spaced-out text-muted h3">Sign in</h1>
          <SignInForm history={history}/>
        </div>
      </div>
  </div>

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
    const { email, password } = this.state;
    const { history } = this.props;

    auth.doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({...initialState});
        history.push('/admin');
      })
      .catch(error => this.setState(() => ({
        error
      })));
  } // handleSubmit

  handleOnChange = (e) => {
    const value = e.target.value;
    const key = e.target.id;

    return {
      [key]: value
    }
  } // handleOnChange

  render(){
    const { email, password, error } = this.state;
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

export default withRouter(SignInPage);
export {
  SignInForm
};
