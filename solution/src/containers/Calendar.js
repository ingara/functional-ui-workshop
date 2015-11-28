import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { AppActions } from '../actions';

import Window from '../containers/Window';
import SnowBar from '../components/SnowBar';

function Calendar({ calendarClass, windows, toggleSnow}) {
  const windowsComponents = windows.map(w => <Window key={ w.day } window={ w } />);

  return (
    <div>
      <SnowBar onClick={() => toggleSnow()}/>
      <div className={ calendarClass }>
        { windowsComponents }
      </div>
    </div>
  );
}

Calendar.propTypes = {
  windows: PropTypes.array.isRequired,
  calendarClass: PropTypes.string,
  toggleSnow: PropTypes.func.isRequired,
};

function mapStateToProps({snowing, calendar}) {
  let calendarClass = 'calendar';
  if (snowing.active) {
    calendarClass = calendarClass + ' calendar-snow';
  }
  return {
    calendarClass,
    windows: calendar.windows,
  };
}

export default connect(mapStateToProps, {
  toggleSnow: AppActions.toggleSnow
})(Calendar);
