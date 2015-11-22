import React, { PropTypes } from 'react';

function ClosedWindow({ text, onClick }) {
  return (
    <div className="window-content" onClick={ onClick }>
      <h1>{ text }</h1>
    </div>
  );
}

ClosedWindow.propTypes = {
  text: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]).isRequired,
  onClick: PropTypes.func.isRequired
};

export default ClosedWindow;
