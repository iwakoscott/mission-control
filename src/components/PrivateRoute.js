import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({ component: Component, users, ...rest}) =>
  (<Route {...rest} render={(props) => {
    return users.isAuthed
        ? <Component {...props} />
        : (<Redirect
            to={{
              pathname: "/login",
              state: { from: props.location }
            }} />)
  }}/>)

export default connect((state) => ({ users: state.users }))(PrivateRoute);
