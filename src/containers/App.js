import React from 'react';
import { connect } from 'react-redux';
import Nav from '../components/Nav';

class App extends React.Component {

  render() {
    return (
      <div>
        <Nav/>
        { this.props.children }
      </div>
    );
  }
}

App.propTypes = {
  toggleSnow: React.PropTypes.func.isRequired,
  children: React.PropTypes.node.isRequired
};

export default connect(() => ({}))(App);
