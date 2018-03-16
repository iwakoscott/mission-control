import React, { Component, Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import MissionControl from './MissionControl';
import Missions from './Missions';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import '../index.css';
import Dashboard from './Dashboard';
import NoMatch from './NoMatch';
import Footer from './Footer';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Fragment>
            <Switch>
              <Route exact path='/' component={MissionControl} />
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
