import React from 'react';

export default function(initialState) {
  return Comp => class extends React.Component {
    constructor(props) {
      super(props);
      this.state = initialState;
    }
    render() {
      return <Comp updateState={ this.setState.bind(this) } state={ this.state } { ...this.props } />;
    }
  };
}
