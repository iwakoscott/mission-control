import React from 'react';
import LogForm from './LogForm';
import Missions from './Missions';

function Dashboard(){
  return (
    <div>
      <LogForm />
      <h6 className="spaced-out text-muted mb-2 mt-4 text-center">Recent Logs</h6>
      <Missions />
    </div>
  );
}

export default Dashboard;
