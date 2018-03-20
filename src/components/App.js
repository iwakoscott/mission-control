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
import EditLog from './EditLog';
import ButtonGroup from './ButtonGroup';
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
          dispatch(authAnonymousUser(user.uid));
        } else {
          const userData = user.providerData[0];
          const { displayName, photoURL } = userData;
          const { uid } = user;
          const userInfo = formatUserData(displayName, photoURL, uid);
          dispatch(authUser(uid));
          dispatch(fetchUserSuccess(uid, userInfo, Date.now()));
        }

      } else {
        auth.incognitoMode()
          .then((user) => this.props.dispatch(authAnonymousUser(user.uid)));
      }

    });
  }

  render() {
    const { isAnonymous, authedID } = this.props.users;
    const { isFetching } = this.props.logs;
    return (
      <div className="App">
        <Router>
          <Fragment>
            {!isAnonymous && !isFetching && authedID !== '' && <ButtonGroup history={this.props.history} />}
            <Switch>
              <Route exact path='/' component={MissionControl} />
              <Route path="/login" component={SignInPage} />
              <PrivateRoute path="/admin" component={Dashboard} />
              <PrivateRoute path="/edit-log/:day" component={EditLog} />
              <Route component={NoMatch} />
            </Switch>
            <Footer />
          </Fragment>
        </Router>
      </div>
    );
  }
}

export default connect(state => ({ users: state.users, logs: state.logs }))(App);
