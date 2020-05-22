import React from 'react';
import '../css/Curated.css';

class Curated extends React.Component {
  render() {
    return (
      <div className="Curated">
        <div className="container">
          <div className="box-curated">
            <div className="row">
              <div className="col m6 s12">
                <img
                  className="cover"
                  src={
                    process.env.PUBLIC_URL +
                    '/images/new_orleans/burleson-design-new-orleans.JPG'
                  }
                  alt="cover"
                />
                <p className="center">New Orleans</p>
              </div>
              <div className="col m6 s12">
                <img
                  className="cover"
                  src={
                    process.env.PUBLIC_URL +
                    '/images/new_orleans/burleson-design-new-orleans.JPG'
                  }
                  alt="cover"
                />
                <p className="center">New Orleans</p>
              </div>
            </div>
            <div className="row">
              <div className="col m6 s12">
                <img
                  className="cover"
                  src={
                    process.env.PUBLIC_URL +
                    '/images/new_orleans/burleson-design-new-orleans.JPG'
                  }
                  alt="cover"
                />
                <p className="center">New Orleans</p>
              </div>
              <div className="col m6 s12">
                <img
                  className="cover"
                  src={
                    process.env.PUBLIC_URL +
                    '/images/new_orleans/burleson-design-new-orleans.JPG'
                  }
                  alt="cover"
                />
                <p className="center">New Orleans</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Curated;
