import React, {Component} from 'react';
import { Link } from 'react-router';

export default class Header extends Component {
  render() {
    return (
      <div className="header" onClick={ this.props.onClick }>
        <ul>
          <li><Link to="/form">Form</Link></li>
          <li><Link to="/">Calendar</Link></li>
        </ul>
      </div>
    );
  }
}
