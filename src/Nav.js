import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
    return (
      <nav className="Nav">
        <h3>Navigation</h3>
        <ul className="nav-links">
            <Link to="/about">
                <li>About</li>
            </Link>
        </ul>
      </nav>
    );
  }
  
  export default Nav;
  