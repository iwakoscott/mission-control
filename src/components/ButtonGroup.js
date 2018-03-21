import React from 'react';
import { withRouter } from 'react-router-dom';
import SignOutButton from './SignOutButton';
import MissionControlButton from './MissionControlButton';
import AdminButton from './AdminButton';

function ButtonGroup(props){
  const isHome = props.location.pathname === '/';
  const isAdminPage = props.location.pathname === '/admin';

  return (
    <div className="container-fluid text-center pt-3 pb-3" style={{background: "#57606f"}}>
        <div
          className="btn-group btn-group-sm"
          role="group">
          {isAdminPage ? null : <AdminButton />}
          {isHome ? null : <MissionControlButton/>}
          <SignOutButton />
        </div>
      </div>
  );
}

export default withRouter(ButtonGroup);
