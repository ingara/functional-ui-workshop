import React, { Component, PropTypes } from 'react';

class TextWindow extends Component {
  render() {
    return <div className="window-content window-content-open"><h2 className="heading">{ this.props.content }</h2></div>;
  }
}

TextWindow.propTypes = {
  content: PropTypes.string
};

export default TextWindow;
