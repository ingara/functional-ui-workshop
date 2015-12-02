import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { ApiActions } from '../actions';
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
    const window = {
      day: parseInt(state.day),
      content: state.text,
      type: state.type
    };
    createWindow(window);
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
      <h3>New Window</h3>
      <TypeSelect types={ types } selectedType={ state.type } onChange={ handleTypeChange } />
      <DaySelect days={ validDays } selectedDay={ state.day } onChange={ handleDayChange } />
      <InputField value={ state.text } validationError={ state.validationError } onChange={ handleTextChange } />
      <button type="submit" onClick={ handleSubmit } disabled={ !canSubmit }> Save</button>
    </form>
  );
}

Form.propTypes = {
  validDays: PropTypes.arrayOf(PropTypes.number).isRequired,
  createWindow: PropTypes.func.isRequired,
  state: PropTypes.object.isRequired,
  updateState: PropTypes.func.isRequired
};

function mapStateToProps({ windows }) {
  const windowDoesNotExists = day => windows.findIndex(w => w.day === day) === -1;
  const validDays = range(24).filter(windowDoesNotExists);
  return {
    validDays
  };
}

export default compose(
  connect(mapStateToProps, { createWindow: ApiActions.createWindow }),
  withState(initialState)
)(Form);
