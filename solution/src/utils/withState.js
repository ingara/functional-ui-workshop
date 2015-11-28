import React from 'react';

const withState = initialState => WrappedComponent => (
  class extends React.Component {
    constructor(props) {
      super(props);
      this.state = initialState;
    }
    render() {
      return (
        <WrappedComponent
          updateState={ this.setState.bind(this) }
          state={ this.state }
          { ...this.props } />
      );
    }
  }
);

export default withState;
