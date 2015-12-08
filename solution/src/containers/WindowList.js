import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import sortBy from 'lodash/collection/sortBy';

function WindowList({ windows }) {
  const windowRows = windows.map(window =>
    <tr className="editable-window" key={ window.day }>
      <td>#{ window.day }</td>
      <td>{ window.type }</td>
      <td>{ window.content }</td>
      <td>{ window.opened.toString() }</td>
    </tr>
  );

  return (
    <div className = "overview">
      <h3>Windows</h3>
      <table>
        <thead>
        <tr>
          <th>Day</th>
          <th>Type</th>
          <th>Content</th>
          <th>Opened</th>
        </tr>
        </thead>
        <tbody>{ windowRows }</tbody>
      </table>
    </div>
  );
}

function mapStateToProps({ windows }) {
  return {
    windows: sortBy(windows, w => w.day)
  };
}

WindowList.propTypes = {
  windows: PropTypes.array.isRequired,
};

export default connect(mapStateToProps)(WindowList);
