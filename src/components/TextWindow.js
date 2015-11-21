import React, { PropTypes } from 'react';

function TextWindow({ content }) {
  return (
    <div className="window-content window-content-open">
      <h2>{ content }</h2>
    </div>
  );
}

TextWindow.propTypes = {
  content: PropTypes.string.isRequired
};

export default TextWindow;
