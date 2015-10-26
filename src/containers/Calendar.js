import React, {Component} from 'react';
import { connect } from 'react-redux';
import Window from '../containers/Window';

function calendarMarkup(windows) {
  return windows.map(window => <Window { ...window } />);
}

class Calendar extends Component {
  render() {
    return <div>{ calendarMarkup(this.props.windows) }</div>;
  }
}


const mapStateToProps = ({ calendar }) => calendar;
export default connect(mapStateToProps)(Calendar);
