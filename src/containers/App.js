import React from 'react';
import { connect } from 'react-redux';

import Header from '../components/Header';
import * as Actions from '../actions';

function App({ children, toggleSnow }) {
  return (
    <div>
      <Header onClick={ toggleSnow } />
      { children }
    </div>
  );
}

App.propTypes = {
  toggleSnow: React.PropTypes.func.isRequired,
  children: React.PropTypes.node.isRequired
};

export default connect(() => ({}), { toggleSnow: Actions.toggleSnow })(App);
