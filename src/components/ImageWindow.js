import React, { Component, PropTypes } from 'react';

class ImageWindow extends Component {
  render() {
    return <img src={ this.props.url } className="image"/>;
  }
}

ImageWindow.propTypes = {
  url: PropTypes.string
};

export default ImageWindow;
