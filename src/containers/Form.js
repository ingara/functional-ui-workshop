import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as Actions from '../actions';
import { InputField } from '../components';

function Form({ data, formChange, formSubmit }) {
  const handleChange = textVal => formChange({ text: textVal });
  const handleSubmit = e => {
    e.preventDefault();
    formSubmit();
  };

  return (
    <form>
      <InputField valueLink={{ value: data.text, requestChange: handleChange }} validationError={ data.validationError } />
      <input type="submit" onClick={ handleSubmit } value="hei" />
    </form>
  );
}

Form.propTypes = {
  data: PropTypes.shape({
    text: PropTypes.string
  }),
  formChange: PropTypes.func.isRequired,
  formSubmit: PropTypes.func.isRequired
};

function mapStateToProps({ form }) {
  return { data: form };
}
const actionCreators = {
  formChange: Actions.formChange,
  formSubmit: Actions.formSubmit
};
export default connect(mapStateToProps, actionCreators)(Form);
