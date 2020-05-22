import React from 'react';
import '../App.css';

class Footer extends React.Component {
  render() {
    return (
      <div className="footer-copyright">
        <div className="footer-wrapper">
          © 2020 Monsieur Inked
          <a style={{ color: '#d4af37' }} href="tel:1-678-642-9863">
            <i className="fas fa-phone-square"></i> 678-642-9863
          </a>
          <a
            style={{ color: '#d4af37' }}
            href="https://www.instagram.com/floweb_us/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <i className="fab fa-instagram"></i> Instagram
          </a>
        </div>
      </div>
    );
  }
}

export default Footer;
