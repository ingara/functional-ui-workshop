import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as Actions from '../actions';
import { InputField, DaySelect, TypeSelect } from '../components';
import { withState, compose, range } from '../utils';
import {
  isValidText,
  isValidImageUrl,
  isValidSpotifyUrl,
  isValidYouTubeUrl
} from '../utils/validation';
import { windowTypes } from '../constants';

function validate({ text, type }) {
  switch (type) {
  case windowTypes.TEXT:
    return isValidText(text) ? null : 'Invalid text';
  case windowTypes.IMAGE:
    return isValidImageUrl(text) ? null : 'Invalid image url';
  case windowTypes.SPOTIFY:
    return isValidSpotifyUrl(text) ? null : 'Invalid Spotify url';
  case windowTypes.YOUTUBE:
    return isValidYouTubeUrl(text) ? null : 'Invalid YouTube url';
  default:
    return 'Invalid type';
  }
}

const initialState = { text: '', type: 'text' };

function Form({ validDays, createWindow, state, updateState }) {
  const handleTypeChange = type => {
    const { text } = state;
    updateState({ type, validationError: validate({ text, type }) });
  };
  const handleTextChange = text => {
    const { type } = state;
    updateState({ text, validationError: validate({ text, type }) });
  };
  const handleDayChange = day => updateState({ day });

  const handleSubmit = e => {
    e.preventDefault();
    createWindow(Object.assign({}, state, { day: parseInt(state.day) }));
    updateState(initialState);
  };

  const canSubmit = state.validationError === null && state.day;
  const types = [
    windowTypes.TEXT,
    windowTypes.IMAGE,
    windowTypes.SPOTIFY,
    windowTypes.YOUTUBE,
  ];

  return (
    <form>
      <TypeSelect types={ types } selectedType={ state.type } onChange={ handleTypeChange } />
      <DaySelect days={ validDays } selectedDay={ state.day } onChange={ handleDayChange } />
      <InputField value={ state.text } validationError={ state.validationError } onChange={ handleTextChange } />
      <input type="submit" onClick={ handleSubmit } value="Save" disabled={ !canSubmit } />
    </form>
  );
}

Form.propTypes = {
  validDays: PropTypes.arrayOf(PropTypes.number).isRequired,
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
  withState(initialState)
)(Form);
