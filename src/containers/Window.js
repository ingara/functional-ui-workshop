import React, {Component} from 'react';
import { connect } from 'react-redux';
import ClosedWindow from '../components/ClosedWindow';
import { openWindow } from '../actions';

class Window extends Component {
  render() {
    const { day, opened, openWindow, content, type } = this.props;
    if (opened) {
      return <div>{ content }</div>;
    }
    return <ClosedWindow onClick={() => openWindow(day)} text={ day } />;
  }
}

export default connect(() => ({}), { openWindow })(Window);
