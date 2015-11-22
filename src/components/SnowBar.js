import React, {Component} from 'react';

export default class SnowBar extends Component {
  render() {
    return (
      <div className="snow-bar" onClick={ this.props.onClick }></div>
    );
  }
}
