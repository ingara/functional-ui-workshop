import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Window from '../containers/Window';
import { toggleSnow } from '../actions';
import SnowBar from '../components/SnowBar';

function calendarMarkup(windows) {
  return windows.map(window => <Window key={ window.day } window={ window } />);
}

class Calendar extends Component {
  render() {
    return(
      <div>
        <SnowBar onClick={() => this.props.toggleSnow() }/>
        <div className={this.props.calendarClass}>{ calendarMarkup(this.props.windows) }</div>
      </div>);
  }
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
  return {calendarClass, windows: calendar.windows};
}

export default connect(mapStateToProps, {toggleSnow})(Calendar);
