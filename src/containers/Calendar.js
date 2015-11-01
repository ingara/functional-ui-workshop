import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Window from '../containers/Window';

function calendarMarkup(windows) {
  return windows.map(window => <Window key={ window.day } window={ window } />);
}

class Calendar extends Component {
  render() {
    return <div>{ calendarMarkup(this.props.windows) }</div>;
  }
}

Calendar.propTypes = {
  windows: PropTypes.array
};

const mapStateToProps = ({ calendar }) => calendar;
export default connect(mapStateToProps)(Calendar);
