import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Window from '../containers/Window';

function calendarMarkup(windows) {
  return windows.map(window => <Window key={ window.day } window={ window } />);
}

function Calendar({ calendarClass, windows }) {
  return <div className={ calendarClass }>{ calendarMarkup(windows) }</div>;
}

Calendar.propTypes = {
  windows: PropTypes.array.isRequired,
  calendarClass: PropTypes.string
};

function mapStateToProps({snowing, calendar}) {
  let calendarClass = 'calendar';
  if (snowing.active) {
    calendarClass = calendarClass + ' calendar-snow';
  }
  return {
    calendarClass,
    windows: calendar.windows
  };
}

export default connect(mapStateToProps)(Calendar);
