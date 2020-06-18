import React from 'react';
import { Link } from 'react-router-dom';

class Sidebar extends React.Component {
  render() {
    return (
      <ul id="slide-out" className="sidenav black">
        <li>
          <div className="center">MARK BURLESON | DESIGN</div>
        </li>
        <li>
          <Link className="sidenav-close" style={{ color: '#fff' }} to="/">
            Home
          </Link>
        </li>
        <li>
          <div className="divider"></div>
        </li>
        <li>
          <Link className="sidenav-close" style={{ color: '#fff' }} to="/about">
            About
          </Link>
        </li>
        <li>
          <div className="divider"></div>
        </li>
        <li>
          <Link
            className="sidenav-close"
            style={{ color: '#fff' }}
            to="/curated"
          >
            Curated Spaces
          </Link>
        </li>
        <li>
          <div className="divider"></div>
        </li>
        <li>
          <Link
            className="sidenav-close"
            style={{ color: '#fff' }}
            to="/contact"
          >
            Contact
          </Link>
        </li>
        <li>
          <div className="divider"></div>
        </li>
      </ul>
    );
  }
}

export default Sidebar;
