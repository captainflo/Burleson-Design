import React from 'react';
import '../css/Welcome.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import ScrollAnimation from 'react-animate-on-scroll';
import Review from '../utils/Review';
import Slick from '../utils/Slick';
import Typing from 'react-typing-animation';
import Services from '../utils/Services';
class Welcome extends React.Component {
  componentDidMount() {
    const elemSlide = document.querySelectorAll('.slider');
    M.Slider.init(elemSlide, {});
  }

  render() {
    return (
      <div>
        <div className="section black">
          <div className="row container">
            <div className="wrapper-banner center">
              <ScrollAnimation animateIn="fadeInDown" animateOnce={true}>
                <div className="logo-me">
                  <img
                    src={process.env.PUBLIC_URL + '/images/logo.png'}
                    alt="logo"
                  />
                </div>
                <Typing ms={1000} className="monsieur" speed={100}>
                  <Typing.Delay ms={1200} />
                  <span>Monsieur Inked</span>
                </Typing>
                <h5>A Distinguished Fashion Stylist & Personal Shopper</h5>
                <h5 style={{ marginTop: 30 }}>
                  <a className="btn-contact" href="mailto:pedro@gmail.com">
                    Contact him
                  </a>
                </h5>
              </ScrollAnimation>
            </div>
          </div>
        </div>
        <div className="section white who">
          <div className="row container">
            <div className="col m4 s12">
              <ScrollAnimation animateIn="fadeInLeft" animateOnce={true}>
                <div className="img-me">
                  <img
                    src={process.env.PUBLIC_URL + '/images/monsieur-inked.jpg'}
                    alt="pedro"
                  />
                </div>
              </ScrollAnimation>
            </div>
            <div className="col m8 s12">
              <ScrollAnimation animateIn="fadeInRight" animateOnce={true}>
                <h4 className="black-text header who-title">
                  Who is Monsieur Inked?
                </h4>
                <p className="black-text text-darken-3 lighten-3">
                  Born in Portugal was in this historic European city that he
                  was first introduced to the world of fashion. By the very
                  young age of five his interest in fashion had been sparked by
                  the beautiful boutiques and vibrancy of old Lisbon. As a young
                  adult he relocated to the romantic city of Paris, France.
                </p>
                <p className="black-text text-darken-3 lighten-3">
                  It was in the fashion capital of the world that he began his
                  career in high fashion. Monsieur Inked was cultivated and
                  refined by the elegance and worldliness of Paris.
                </p>
                <p className="black-text text-darken-3 lighten-3">
                  When his years in Paris came to an end, Monsieur Inked brought
                  his style and his dignified European sophistication to
                  America, assisting clients in cities such as Atlanta, Houston
                  and the cosmopolitan metropolis of Miami. Monsieur Inked has
                  intrinsically combined his enjoyment for high fashion, his
                  thorough knowledge of the fashion world, his valuable work
                  experience and developed professional services that benefit
                  individuals seeking fashion assistance.
                </p>
                <p className="signature black-text text-darken-3 lighten-3 right">
                  Monsieur Inked
                </p>
              </ScrollAnimation>
            </div>
          </div>
        </div>
        <div className="section black portfolio">
          <h4 className="center">My Portfolio</h4>
          <hr></hr>
          <div style={{ paddingBottom: 30 }} className="container">
            <div className="row">
              <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
                <Slick />
              </ScrollAnimation>
            </div>
          </div>
        </div>
        <div className="section white">
          <div className="container">
            <div className="row">
              <Services />
            </div>
          </div>
        </div>
        <div className="section black portfolio">
          <div className="container">
            <div className="row">
              <Review />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Welcome;
