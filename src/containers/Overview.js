import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import EditableWindow from '../containers/EditableWindow';

function windowList(windows) {
  return windows.map(window => <EditableWindow key={ window.day } {...window} />);
}

function Overview({windows}) {
  return (<div className = "overview">
    <h3>Windows</h3>
    <table>{windowList(windows)}</table>
  </div>);
}

function mapStateToProps({calendar}) {
  return {
    windows: calendar.windows
  };
}

Overview.propTypes = {
  windows: PropTypes.array.isRequired,
};

export default connect(mapStateToProps, {})(Overview);
