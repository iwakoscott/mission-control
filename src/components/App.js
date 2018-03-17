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


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      authUser: null
    };
  }
  render() {
    return (
      <div className="App">
        <Router>
          <Fragment>
            <Switch>
              <Route exact path='/' component={MissionControl} />
              <Route exact path="/login" component={SignInPage}/>
              <Route exact path='/admin' component={Dashboard} />
              <Route component={NoMatch} />
            </Switch>
            <Footer />
          </Fragment>
        </Router>
      </div>
    );
  }
}

export default App;
