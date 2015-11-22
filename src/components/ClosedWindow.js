import React, { Component, PropTypes } from 'react';

class ClosedWindow extends Component {
  render() {
    return (
      <div className="window-content" onClick={ this.props.onClick }>
        <h1 className="heading">{ this.props.text }</h1>
      </div>
    );
  }
}

ClosedWindow.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func.isRequired
};

export default ClosedWindow;
