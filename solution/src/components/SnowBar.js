import React, {PropTypes} from 'react';

function SnowBar({ onClick }) {
  return <div className="snow-bar" onClick={ onClick }></div>;
}

SnowBar.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default SnowBar;
