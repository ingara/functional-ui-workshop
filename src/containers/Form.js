import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as Actions from '../actions';
import InputField from '../components/InputField';

class Form extends React.Component {
  render() {
    const { data, formChange, formSubmit } = this.props;
    const inputVal = data.text;
    const handleChange = textVal => formChange({ text: textVal });
    const handleSubmit = e => {
      e.preventDefault();
      formSubmit();
    };
    return (
      <form>
        <InputField valueLink={{ value: inputVal, requestChange: handleChange }} validationError={ data.validationError } />
        <input type="submit" onClick={ handleSubmit } value="hei" />
      </form>
    );
  }
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
function bindActionCreators() {
  return {
    formChange: Actions.formChange,
    formSubmit: Actions.formSubmit
  };
}
export default connect(mapStateToProps, bindActionCreators())(Form);
