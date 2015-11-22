import React, { PropTypes } from 'react';

function DaySelect({ onChange, days, selectedDay }) {
  const dayOptions = days
    .map(day => <option key={ `dayOption${day}` } label={ day } value={ day } />);

  const valueLink = {
    value: selectedDay,
    requestChange: day => onChange(parseInt(day))
  };

  return (
    <div>
      <select name="day" id="daySelect" valueLink={ valueLink } defaultValue="none">
        <option label="Choose day" value="none" disabled />
        { dayOptions }
      </select>
      <label htmlFor="daySelect">Day</label>
    </div>
  );
}

DaySelect.propTypes = {
  onChange: PropTypes.func.isRequired,
  days: PropTypes.array.isRequired,
  selectedDay: PropTypes.number
};

export default DaySelect;
