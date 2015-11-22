import React, { PropTypes } from 'react';
import { Link } from 'react-router';

function Header({ onClick }) {
  return (
    <div className="header" onClick={ onClick }>
      <ul>
        <li><Link to="/form">Form</Link></li>
        <li><Link to="/">Calendar</Link></li>
      </ul>
    </div>
  );
}

Header.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default Header;
