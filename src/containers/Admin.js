import React, { PropTypes } from 'react';
import Form from './Form';
import Overview from './Overview';

function Admin() {
  return (<div className="admin-wrapper">
    <Overview/>
    <Form/>
  </div>);
}

export default Admin;
