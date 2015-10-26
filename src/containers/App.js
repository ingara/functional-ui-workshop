import React from 'react';
import Calendar from '../containers/Calendar';

class App extends React.Component {
  render() {
    return (
      <div>
        <Calendar />
      </div>
    );
  }
}

App.propTypes = {
  count: React.PropTypes.number,
  increase: React.PropTypes.func,
  decrease: React.PropTypes.func,
};

export default App;
