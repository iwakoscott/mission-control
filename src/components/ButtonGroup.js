import React from 'react';
import { withRouter } from 'react-router-dom';
import SignOutButton from './SignOutButton';
import MissionControlButton from './MissionControlButton';

function ButtonGroup(props){
  const isHome = props.location.pathname === '/';
  return (
    <div className="container mb-2 mt-2 text-center">
        <div
          className="btn-group btn-group-md"
          role="group">
          {isHome ? null : <MissionControlButton/>}
          <SignOutButton />
        </div>
      </div>
  );
}

export default withRouter(ButtonGroup);
