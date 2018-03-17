/*
  dispatch(handleSignOut())
    dispatch(signOut())
    auth.doSignOut()
      .then(
        this.props.history.push('/login');
      ).catch((error) => dispatch(logoutFail()))
*/

import React from 'react';
import { auth } from '../firebase';

const SignOutButton = () =>
  <div className="text-center">
    <button
      className="btn btn-danger spaced-out m-2"
      onClick={auth.doSignOut}>
      Sign out
    </button>
  </div>

export default SignOutButton;
