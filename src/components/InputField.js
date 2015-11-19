import React, { PropTypes } from 'react';

export default class Foo extends React.Component {
  render() {
    const { valueLink, validationError } = this.props;
    return (
      <div>
        <input type="text" valueLink={ valueLink } />
        <div>{ validationError }</div>
      </div>
    );
  }
}

Foo.propTypes = {
  valueLink: PropTypes.shape({
    value: PropTypes.string.isRequired,
    requestChange: PropTypes.func.isRequired
  }).isRequired,
  validationError: PropTypes.string
};
