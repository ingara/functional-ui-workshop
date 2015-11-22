import React, {Component} from 'react';
import { Link } from 'react-router';

export default class SnowBar extends Component {
  render() {
    return (
      <ul className="nav-links">
        <li><Link to="/">Calendar</Link></li>
        <li><Link to="/form">Form</Link></li>
      </ul>
    );
  }
}
