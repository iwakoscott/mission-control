import React from 'react';
import { withRouter } from 'react-router-dom';
import SignInForm from './SignInForm';
import { connect } from 'react-redux';

function SignInPage(props){
  const { error } = props;
  return (
    <div className="container mt-5 d-flex justify-content-center align-items-center">
        <div className="card mt-5 mb-5">
          <div className="card-body text-center p-5">
            <h1 className="card-title spaced-out text-muted h3">Sign in</h1>
            <SignInForm />
          </div>
          {
            error &&
              <div className="card-footer">
                <strong>{error}</strong>
              </div>
          }
        </div>
    </div>
  );
}

function mapStateToProps({ users }){
  return { error: users.error };
}

export default connect(mapStateToProps)(SignInPage);
