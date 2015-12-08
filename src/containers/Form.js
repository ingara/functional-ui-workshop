import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { AppActions } from '../actions';
import { range } from '../utils';
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

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }
  render() {
    const { validDays, dispatch } = this.props;

    const handleTypeChange = type => {
      const { text } = this.state;
      this.setState({ type, validationError: validate({ text, type }) });
    };
    const handleTextChange = text => {
      const { type } = this.state;
      this.setState({ text, validationError: validate({ text, type }) });
    };
    const handleDayChange = day => this.setState({ day });

    const handleSubmit = e => {
      e.preventDefault();
      const window = {
        day: parseInt(this.state.day),
        content: this.state.text,
        type: this.state.type,
        opened: false,
      };
      dispatch(AppActions.createWindow(window));
      this.setState(initialState);
    };

    const canSubmit = this.state.validationError === null && this.state.day;
    const types = [
      windowTypes.TEXT,
      windowTypes.IMAGE,
      windowTypes.SPOTIFY,
      windowTypes.YOUTUBE,
    ];

    const radios = types.map(type => {
      const id = `windowtype${type}`;
      return (
        <li key={ type }>
          <input
            type="radio"
            name="type"
            id={ id }
            label={ type }
            checkedLink={{
              value: this.state.type === type,
              requestChange: () => handleTypeChange(type)
            }} />
          <label htmlFor={ id }>{ type }</label>
        </li>
      );
    });
    const dayOptions = validDays
      .map(day => <option key={ `dayOption${day}` } label={ day } value={ day } />);

    return (
      <form>
        <h3>New Window</h3>
        <ul>{ radios }</ul>
        <div>
          <label htmlFor="daySelect">Day</label>
          <select
            name="day"
            id="daySelect"
            valueLink={{
              value: this.state.day,
              requestChange: day => handleDayChange(parseInt(day))
            }}
            defaultValue="none">
            <option label="Choose day" value="none" disabled />
            { dayOptions }
          </select>
        </div>
        <div>
          <input
            type="text"
            valueLink={{
              value: this.state.text,
              requestChange: handleTextChange
            }} />
          <div>{ this.state.validationError }</div>
        </div>
        <button type="submit" onClick={ handleSubmit } disabled={ !canSubmit }> Save</button>
      </form>
    );
  }
}

Form.propTypes = {
  validDays: PropTypes.arrayOf(PropTypes.number).isRequired,
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps({ windows }) {
  const windowDoesNotExists = day => windows.findIndex(w => w.day === day) === -1;
  const validDays = range(24).filter(windowDoesNotExists);
  return {
    validDays
  };
}

export default connect(mapStateToProps)(Form);
