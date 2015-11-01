import React, {Component} from 'react';

export default class Header extends Component {
  render() {
    return (
      <div className="header" onClick={ this.props.onClick }>
      </div>
    );
  }
}

