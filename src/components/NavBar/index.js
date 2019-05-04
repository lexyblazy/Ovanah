import React from 'react';
import { PRIMARY_COLOR } from '../../actions/constants';

const NavBar = props => {
  return (
    <nav>
      <div className="nav-wrapper" style={{ backgroundColor: PRIMARY_COLOR }}>
        <a href="/" className="brand-logo">
          <i className="material-icons">cloud</i>Weather App
        </a>
        <ul className="right hide-on-med-and-down">
          <li>
            <a href="/">
              <i className="material-icons">refresh</i>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
