import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import MissionControl from './MissionControl';
import '../index.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MissionControl />
      </div>
    );
  }
}

export default App;
