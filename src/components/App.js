import React, { Component, Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import MissionControl from './MissionControl';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import '../index.css';
import Dashboard from './Dashboard';
import NoMatch from './NoMatch';
import Footer from './Footer';
import SignInPage from './SignInPage';
import PrivateRoute from './PrivateRoute';
import { formatUserData } from '../utils/tools';
import { connect } from 'react-redux';
import { authUser, fetchUserSuccess, authAnonymousUser } from '../actions/users';
import { auth } from '../firebase';

class App extends Component {

  componentDidMount(){
    const { dispatch } = this.props;
    auth.onAuthStateChanged((user) => {

      if (user) {

        if (user.isAnonymous){
          return dispatch(authAnonymousUser(user.uid));
        }

        const userData = user.providerData[0];
        const { displayName, photoURL } = userData;
        const { uid } = user;
        const userInfo = formatUserData(displayName, photoURL, uid);
        dispatch(authUser(uid));
        dispatch(fetchUserSuccess(uid, userInfo, Date.now()));
        
      } else {
        auth.incognitoMode()
          .then((user) => this.props.dispatch(authAnonymousUser(user.uid)));
      }

    });
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Fragment>
            <Switch>
              <Route exact path='/' component={MissionControl} />
              <Route exact path="/login" component={SignInPage}/>
              <PrivateRoute exact path="/admin" component={Dashboard} />
              <Route component={NoMatch} />
            </Switch>
            <Footer />
          </Fragment>
        </Router>
      </div>
    );
  }
}

export default connect()(App);
