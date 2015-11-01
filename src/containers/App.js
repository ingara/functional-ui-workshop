import React from 'react';
import { connect } from 'react-redux';

import Calendar from './Calendar';
import Header from '../components/Header';
import { toggleSnow } from '../actions';


class App extends React.Component {

  render() {
    return (
      <div>
        <Header onClick={() => this.props.toggleSnow() }/>
        <Calendar/>
      </div>
    );
  }
}

App.propTypes = {
  toggleSnow: React.PropTypes.func,
};

export default connect(() => ({}), { toggleSnow })(App);
