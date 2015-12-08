import React from 'react';
import Form from './Form';
import WindowList from './WindowList';
import OpenClose from '../components/OpenClose';

function Admin() {
  return (<div className="admin-wrapper">
    <div className="left-menu">
      <OpenClose openAll={() => console.log('Open all windows') }
                 closeAll={() => console.log('Close all windows') }/>
      <Form/>
    </div>
    <WindowList/>
  </div>);
}


export default Admin;
