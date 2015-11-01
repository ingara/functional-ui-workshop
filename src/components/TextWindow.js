import React, { Component, PropTypes } from 'react';

class TextWindow extends Component {
  render() {
    return <div>{ this.props.content }</div>;
  }
}

TextWindow.propTypes = {
  content: PropTypes.string
};

export default TextWindow;
