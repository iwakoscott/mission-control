import React, { Component } from 'react';
import LogForm from './LogForm';

class Dashboard extends Component {

  handleOnChange = (e) => {
    const type = e.target.id;
    const value = e.target.value;
    this.setState(() => ({
      [type]: value
    }), () => console.log(this.state));
  };

  handleSubmit = (e) => {
    e.preventDefault();

    // Optimistically update local data
    // Push to server
    // show user a 'success' alert if successful
      // Send tweet
    // Show error alert otherwise.
  }

  render(){
    return (
      <div>
        <LogForm />
      </div>
    );
  }


}

export default Dashboard;
