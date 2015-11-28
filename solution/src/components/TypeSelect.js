import React, { PropTypes } from 'react';

function TypeSelect({ onChange, types, selectedType }) {
  const radioCheckedLink = type => ({
    value: selectedType === type,
    requestChange: () => onChange(type)
  });
  const radios = types.map(type => {
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
  return <ul>{ radios }</ul>;
}

TypeSelect.propTypes = {
  onChange: PropTypes.func.isRequired,
  types: PropTypes.array.isRequired,
  selectedType: PropTypes.string.isRequired
};

export default TypeSelect;
