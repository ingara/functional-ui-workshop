import React from 'react';

class ClosedWindow extends React.Component {
  render() {
    return (
      <div onClick={ this.props.onClick }>
        { this.props.text }
      </div>
    );
  }
}

export default ClosedWindow;
