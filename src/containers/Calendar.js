import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Window from '../containers/Window';
import { toggleSnow } from '../actions';
import SnowBar from '../components/SnowBar';

function calendarMarkup(windows) {
  return windows.map(window => <Window key={ window.day } window={ window } />);
}

function Calendar({ calendarClass, windows, toggleSnow }) {
  return (<div>
    <SnowBar onClick={() => toggleSnow()}/>
    <div className={ calendarClass }>{ calendarMarkup(windows) }</div>
  </div>);
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

export default connect(mapStateToProps, {toggleSnow})(Calendar);
