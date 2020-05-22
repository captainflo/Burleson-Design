import React from 'react';
import { Link } from 'react-router-dom';

class Sidebar extends React.Component {
  render() {
    return (
      <ul id="slide-out" class="sidenav black">
        <li>
          <div className="center">MARK BURLESON | DESIGN</div>
        </li>
        <li>
          <Link style={{ color: '#fff' }} to="/">
            Home
          </Link>
        </li>
        <li>
          <div class="divider"></div>
        </li>
        <li>
          <Link style={{ color: '#fff' }} to="/about">
            About
          </Link>
        </li>
        <li>
          <div class="divider"></div>
        </li>
        <li>
          <Link style={{ color: '#fff' }} to="/curated">
            Curated Spaces
          </Link>
        </li>
        <li>
          <div class="divider"></div>
        </li>
        <li>
          <Link style={{ color: '#fff' }} to="/contact">
            Contact
          </Link>
        </li>
        <li>
          <div class="divider"></div>
        </li>
      </ul>
    );
  }
}

export default Sidebar;
