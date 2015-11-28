import React from 'react';
import { connect } from 'react-redux';

import Nav from '../components/Nav';

function App({children}) {
  return (
    <div>
      <Nav/>
      { children }
    </div>
  );
}

App.propTypes = {
  children: React.PropTypes.node.isRequired
};

export default App;
