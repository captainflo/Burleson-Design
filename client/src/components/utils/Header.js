import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';

class Header extends React.Component {
  renderLinks() {
    return (
      <div>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/curated">Curated Spaces</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </div>
    );
  }

  render() {
    return (
      <div>
        <nav>
          <a href="#/" data-target="slide-out" className="sidenav-trigger">
            <i className="material-icons">menu</i>
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            {this.renderLinks()}
          </ul>
        </nav>
        <Sidebar />
      </div>
    );
  }
}

export default Header;
