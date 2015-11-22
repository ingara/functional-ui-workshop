import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as Actions from '../actions';
import { InputField } from '../components';
import { withState, compose, range } from '../utils';
import {
  isValidText,
  isValidImageUrl,
  isValidSpotifyUrl,
  isValidYouTubeUrl
} from '../utils/validation';

function validate({ text, type }) {
  switch (type) {
  case 'text':
    return isValidText(text) ? null : 'Invalid text';
  case 'image':
    return isValidImageUrl(text) ? null : 'Invalid image url';
  case 'spotify':
    return isValidSpotifyUrl(text) ? null : 'Invalid Spotify url';
  case 'youtube':
    return isValidYouTubeUrl(text) ? null : 'Invalid YouTube url';
  default:
    return 'Invalid type';
  }
}

function Form({ validDays, createWindow, state, updateState }) {
  const radioCheckedLink = type => ({
    value: state.type === type,
    requestChange: () => {
      const { text } = state;
      updateState({ type, validationError: validate({ text, type }) });
    }
  });
  const textValueLink = {
    value: state.text,
    requestChange: text => {
      const { type } = state;
      updateState({ text, validationError: validate({ text, type }) });
    }
  };
  const dayValueLink = {
    value: state.day,
    requestChange: day => {
      updateState({ day });
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    createWindow(Object.assign({}, state, { day: parseInt(state.day) }));
  };

  const radios = [
    'text', 'image', 'spotify', 'youtube'
  ].map(type => {
    const id = `windowtype${type}`;
    return (
      <li key={ type }>
        <input
          type="radio"
          name="type"
          id={ id }
          label={ type }
          checkedLink={ radioCheckedLink(type) } />
        <label htmlFor={ id }>{ type }</label>
      </li>
    );
  });

  const dayOptions = validDays
    .map(day => <option key={ `dayOption${day}` } label={ day } value={ day } />);

  const canSubmit = state.validationError === null && state.day;

  return (
    <form>
      <ul>{ radios }</ul>
      <select name="day" id="daySelect" valueLink={ dayValueLink } defaultValue="none">
        <option label="Choose day" value="none" disabled />
        { dayOptions }
      </select>
      <label htmlFor="daySelect">Day</label>
      <InputField valueLink={ textValueLink } validationError={ state.validationError } />
      <input type="submit" onClick={ handleSubmit } value="Save" disabled={ !canSubmit } />
    </form>
  );
}

Form.propTypes = {
  validDays: PropTypes.arrayOf(PropTypes.number),
  createWindow: PropTypes.func.isRequired,
  state: PropTypes.object.isRequired,
  updateState: PropTypes.func.isRequired
};

function mapStateToProps({ calendar }) {
  return {
    validDays: range(31).filter(day => calendar.windows.findIndex(w => w.day === day) === -1)
  };
}

export default compose(
  connect(mapStateToProps, { createWindow: Actions.createWindow }),
  withState({ text: '', type: 'text' })
)(Form);
