import React from 'react';
import { Link } from 'react-router';

function Nav() {
  return (
    <ul className="nav-links">
      <li><Link to="/">Calendar</Link></li>
      <li><Link to="/form">Form</Link></li>
    </ul>
  );
}

export default Nav;
