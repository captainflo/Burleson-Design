import React from 'react';
import '../css/Services.css';
import ScrollAnimation from 'react-animate-on-scroll';

class Review extends React.Component {
  render() {
    return (
      <div className="Services center">
        <ScrollAnimation animateIn="fadeInDown" animateOnce={true}>
          <div className="col m3 s12">Fashion Styling</div>
        </ScrollAnimation>
        <ScrollAnimation delay={600} animateIn="fadeInDown" animateOnce={true}>
          <div className="col m3 s12">Personal Shopping</div>
        </ScrollAnimation>
        <ScrollAnimation delay={1200} animateIn="fadeInDown" animateOnce={true}>
          <div className="col m3 s12">Wardrobe Audits</div>
        </ScrollAnimation>
        <ScrollAnimation delay={1800} animateIn="fadeInDown" animateOnce={true}>
          <div className="col m3 s12">Closet Organization</div>
        </ScrollAnimation>
      </div>
    );
  }
}

export default Review;
