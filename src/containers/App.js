import React from 'react';
import { connect } from 'react-redux';
import { increaseCounter, decreaseCounter } from '../actions';
import Counter from '../components/Counter';

class App extends React.Component {
  render() {
    const { count, increase, decrease } = this.props;

    return (
      <div>
        <h1>Hello World!</h1>
        <Counter count={ count } increase={ increase } decrease={ decrease } />
      </div>
    );
  }
}
App.propTypes = {
  count: React.PropTypes.number,
  increase: React.PropTypes.func,
  decrease: React.PropTypes.func,
};

const select = state => ({ count: state.count });
export default connect(select, {
  increase: increaseCounter,
  decrease: decreaseCounter
})(App);
