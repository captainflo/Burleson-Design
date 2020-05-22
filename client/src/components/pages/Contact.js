import React from 'react';
import '../css/Contact.css';

class Contact extends React.Component {
  render() {
    return (
      <div className="Contact">
        <div className="container">
          <div className="center box-contact">
            <img
              className="mark-contact"
              src={process.env.PUBLIC_URL + '/images/mark.JPG'}
              alt="cover"
            />
            <p>
              <a className="phone-mark" href="tel:1-404-333-4879">
                404.333.4879
              </a>
            </p>
            <p>
              <a
                className="phone-mark"
                href="mailto:mark.burlesondesign@gmail.com"
              >
                mark.burlesondesign@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
