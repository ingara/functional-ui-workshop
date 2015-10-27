import React, { Component, PropTypes } from 'react';

class ClosedWindow extends Component {
  render() {
    return (
      <div onClick={ this.props.onClick }>
        { this.props.text }
      </div>
    );
  }
}

ClosedWindow.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func.isRequired
};

export default ClosedWindow;
