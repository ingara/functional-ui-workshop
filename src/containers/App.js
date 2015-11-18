import React from 'react';
import { connect } from 'react-redux';

import Header from '../components/Header';
import { toggleSnow } from '../actions';


class App extends React.Component {

  render() {
    return (
      <div>
        <Header onClick={() => this.props.toggleSnow() }/>
        { this.props.children }
      </div>
    );
  }
}

App.propTypes = {
  toggleSnow: React.PropTypes.func.isRequired,
  children: React.PropTypes.node.isRequired
};

export default connect(() => ({}), { toggleSnow })(App);
