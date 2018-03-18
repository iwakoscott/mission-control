import React from 'react';
import SignInForm from './SignInForm';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

function SignInPage(props){
  const { error, isAuthed } = props;
  const { from } = props.location.state || { from: { pathname: "/admin" } };
  console.log(isAuthed);

  if (isAuthed) {
    return <Redirect to={from} />;
  }

  return (
    <div className="container mt-5 d-flex justify-content-center align-items-center">
        <div className="card mt-5 mb-5">
          <div className="card-body text-center p-5">
            <h1 className="card-title spaced-out text-muted h3">Sign in</h1>
            <SignInForm history={props.history}/>
          </div>
          {
            error &&
              <div className="card-footer">
                <p className="spaced-out-lower">
                  <strong>{error}</strong>
                </p>
              </div>
          }
        </div>
    </div>
  );
}

function mapStateToProps({ users }){
  return {
    error: users.error,
    isAuthed: users.isAuthed
  };
}

export default connect(mapStateToProps)(SignInPage);
