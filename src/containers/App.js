import React from 'react';
import { connect } from 'react-redux';
import superagent from 'superagent';
import {loadWindowsRequest, loadWindowsFailure, loadWindowsSuccess} from '../actions';

import Nav from '../components/Nav';

function App({children, dispatch}) {
  const loadData = () => {
    const url = '/api/windows';
    dispatch(loadWindowsRequest());
    superagent
      .get(url)
      .end((error, response) => {
        if (response !== null) {
          dispatch(loadWindowsSuccess(response.text));
        } else {
          dispatch(loadWindowsFailure(error));
        }
      });
  }
  loadData();

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

export default connect()(App);
