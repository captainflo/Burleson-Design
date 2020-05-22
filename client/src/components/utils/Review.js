import React from 'react';
import '../css/Review.css';
import M from 'materialize-css/dist/js/materialize.min.js';

class Review extends React.Component {
  componentDidMount() {
    // SideBar
    var elems = document.querySelectorAll('.carousel');
    M.Carousel.init(elems, { padding: 0 });
  }
  render() {
    return (
      <div className="Review">
        <div className="container center">
          <div className="row">
            <h3>Reviews</h3>
            <hr></hr>
          </div>
          <div className="carousel">
            <div className="carousel-item">
              <p>Sheila Ruiz</p>
              <p className="text-review">
                <i className="fas fa-quote-left"></i>Monsieur Inked is such an
                inspiration! When it comes to styling he is very knowledgeable
                on what works best for you and the looks you are trying to
                achieve. He is professional and makes you feel comfortable
                throughout the whole process! Thank you for the beautiful
                confidence you’ve helped me radiate! A new life long friend and
                go to stylist!
                <i className="fas fa-quote-right"></i>
              </p>
              <p>Atlanta</p>
              <p>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </p>
            </div>
            <div className="carousel-item">
              <p>Steve Henry </p>
              <p className="text-review">
                <i className="fas fa-quote-left"></i> Monsieur Inked changed the
                way I dress and feel in a weekend. One of the best choices I’ve
                made for myself - ever!
                <i className="fas fa-quote-right"></i>
              </p>
              <p>Houston</p>
              <p>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </p>
            </div>{' '}
            <div className="carousel-item">
              <p>Katya Prekrasnaya</p>
              <p className="text-review">
                <i className="fas fa-quote-left"></i> Monsieur Inked has a great
                talent for integrating who you are as a person with what you
                want to say through your appearance. A master at work giving you
                a 110% of confidence to take over the world.
                <i className="fas fa-quote-right"></i>
              </p>
              <p>Atlanta</p>
              <p>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Review;
