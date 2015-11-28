import React, { PropTypes } from 'react';

function ImageWindow({ url }) {
  return <img src={ url } className="image"/>;
}

ImageWindow.propTypes = {
  url: PropTypes.string.isRequired
};

export default ImageWindow;
