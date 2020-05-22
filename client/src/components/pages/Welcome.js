import React from 'react';
import '../css/Welcome.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import Typing from 'react-typing-animation';
import Header from '../utils/Header';

class Welcome extends React.Component {
  componentDidMount() {
    const elemSlide = document.querySelectorAll('.slider');
    M.Slider.init(elemSlide, { height: 600, indicators: false });
  }

  render() {
    return (
      <div>
        <div class="slider fullscreen">
          <Header />
          <ul class="slides">
            <li>
              <img
                className="banner-img"
                src={process.env.PUBLIC_URL + '/images/burleson-design03.JPG'}
                alt="mark burleson"
              />
              <div class="caption center-align">
                <div className="title-wrapper">
                  <Typing ms={1000} className="monsieur" speed={100}>
                    <Typing.Delay ms={1200} />
                    <span>
                      MARK BURLESON <span className="slash">|</span> DESIGN
                    </span>
                  </Typing>
                </div>
              </div>
            </li>
            <li>
              <img
                src={process.env.PUBLIC_URL + '/images/burleson-design02.JPG'}
                alt="mark burleson"
              />
            </li>
            <li>
              <img
                src={process.env.PUBLIC_URL + '/images/burleson-design04.JPG'}
                alt="mark burleson"
              />
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Welcome;
