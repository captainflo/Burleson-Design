import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default class Responsive extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      className: 'center',
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <img
              src={process.env.PUBLIC_URL + '/images/monsieur-inked01.JPG'}
              alt="monsieur-inked"
            />
          </div>
          <div>
            <img
              src={process.env.PUBLIC_URL + '/images/monsieur-inked04.JPG'}
              alt="monsieur-inked"
            />
          </div>
          <div>
            <img
              src={process.env.PUBLIC_URL + '/images/monsieur-inked02.JPG'}
              alt="monsieur-inked"
            />
          </div>
          <div>
            <img
              src={process.env.PUBLIC_URL + '/images/monsieur-inked03.JPG'}
              alt="monsieur-inked"
            />
          </div>
          <div>
            <img
              src={process.env.PUBLIC_URL + '/images/monsieur-inked05.JPG'}
              alt="monsieur-inked"
            />
          </div>
          <div>
            <img
              src={process.env.PUBLIC_URL + '/images/monsieur-inked06.JPG'}
              alt="monsieur-inked"
            />
          </div>
        </Slider>
      </div>
    );
  }
}
