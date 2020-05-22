import React from 'react';
import '../css/About.css';
import ScrollAnimation from 'react-animate-on-scroll';

class About extends React.Component {
  render() {
    return (
      <div className="About">
        <div className="container">
          <div className="box-about">
            <div className="row">
              <div className="col m4 12">
                <img
                  className="mark"
                  src={
                    process.env.PUBLIC_URL +
                    '/images/burleson-design-avatar.JPG'
                  }
                  alt="mark burleson"
                />
              </div>
              <div className="col m8 12">
                <div className="about-text-wrapper">
                  <p>
                    I grew up in the Mississippi Delta with beautiful cotton
                    fields and blues/jazz music that definitely help influence
                    my personal style as a designer .
                  </p>{' '}
                  <p>
                    I have always had a passion for creating beautiful spaces
                    that tells a story about a clients personal journey in life.
                    My philosophy is simple, turn a house into a home by making
                    it livable and engaging.
                  </p>
                  <p>
                    Mark Burleson designs are infused with a mixture of old and
                    new pieces that appear to be collected over time. I believe
                    when a home is designed well, we live in it better and that
                    is a very important thing.
                  </p>
                  <p className="signature right">Mark Burleson</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
