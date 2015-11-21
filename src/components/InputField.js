import React, { PropTypes } from 'react';

function InputField({ valueLink, validationError }) {
  return (
    <div>
      <input type="text" valueLink={ valueLink } />
      <div>{ validationError }</div>
    </div>
  );
}

InputField.propTypes = {
  valueLink: PropTypes.shape({
    value: PropTypes.string.isRequired,
    requestChange: PropTypes.func.isRequired
  }).isRequired,
  validationError: PropTypes.string
};

export default InputField;
