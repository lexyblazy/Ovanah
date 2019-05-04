import React from 'react';
import { PRIMARY_COLOR } from '../../actions/constants';

const NavBar = props => {
  return (
    <div className="navbar-fixed">
      <nav>
        <div className="nav-wrapper" style={{ backgroundColor: PRIMARY_COLOR }}>
          <a href="/" className="brand-logo">
            <i className="material-icons">cloud</i>Weather
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
    </div>
  );
};

export default NavBar;
