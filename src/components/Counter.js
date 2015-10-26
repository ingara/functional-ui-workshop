import React from 'react';

class Counter extends React.Component {
  render() {
    const { count, increase, decrease } = this.props;

    return (
      <div>
        <p>Count: { count }</p>
        <button onClick={ increase }>+</button>
        <button onClick={ decrease }>-</button>
      </div>
    );
  }
}

Counter.propTypes = {
  count: React.PropTypes.number,
  increase: React.PropTypes.func,
  decrease: React.PropTypes.func,
};

export default Counter;
