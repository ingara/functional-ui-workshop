import React, { PropTypes } from 'react';

function InputField({ value, onChange, validationError }) {
  const valueLink = {
    value,
    requestChange: onChange
  };
  return (
    <div>
      <input type="text" valueLink={ valueLink } />
      <div>{ validationError }</div>
    </div>
  );
}

InputField.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  validationError: PropTypes.string
};

export default InputField;
