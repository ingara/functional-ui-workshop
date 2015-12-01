import React from 'react';
import Form from './Form';
import Overview from './WindowList';

function Admin() {
  return (<div className="admin-wrapper">
    <Form/>
    <Overview/>
  </div>);
}

export default Admin;
