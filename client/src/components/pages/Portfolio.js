import React from 'react';
import '../css/Portfolio.css';
import M from 'materialize-css/dist/js/materialize.min.js';

class Portfolio extends React.Component {
  componentDidMount() {
    const elemsBox = document.querySelectorAll('.materialboxed');
    M.Materialbox.init(elemsBox, {});
  }
  state = {
    portfolio: [
      {
        id: '01',
        title: 'Atlanta',
        imagePlus: [
          '/images/Atlanta01/burleson-Atlanta.JPG',
          '/images/Atlanta01/02burleson-Atlanta.JPG',
          '/images/Atlanta01/03burleson-Atlanta.JPG',
          '/images/Atlanta01/04burleson-Atlanta.JPG',
          '/images/Atlanta01/05burleson-Atlanta.JPG',
          '/images/Atlanta01/06burleson-Atlanta.JPG',
        ],
      },
      {
        id: '02',
        title: 'Atlanta',
        imagePlus: [
          '/images/Atlanta/burleson01.JPG',
          '/images/Atlanta/burleson02.JPG',
          '/images/Atlanta/burleson03.JPG',
          '/images/Atlanta/burleson04.JPG',
          '/images/Atlanta/burleson05.JPG',
          '/images/Atlanta/burleson06.JPG',
        ],
      },
      {
        id: '03',
        title: 'Tampa',
        imagePlus: [
          '/images/Tampa/burleson01.JPG',
          '/images/Tampa/burleson02.JPG',
          '/images/Tampa/burleson03.JPG',
          '/images/Tampa/burleson04.JPG',
          '/images/Tampa/burleson05.JPG',
          '/images/Tampa/burleson06.JPG',
          '/images/Tampa/burleson07.JPG',
        ],
      },
      {
        id: '04',
        title: 'New Orleans',
        imagePlus: [
          '/images/new_orleans/burleson-design-new-orleans.JPG',
          '/images/new_orleans/burleson-design-new-orleans01.JPG',
          '/images/new_orleans/burleson-design-new-orleans02.JPG',
          '/images/new_orleans/burleson-design-new-orleans03.JPG',
          '/images/new_orleans/burleson-design-new-orleans05.JPG',
        ],
      },
    ],
  };

  renderMultipleImage = (images) => {
    if (images) {
      return images.map((image) => {
        return (
          <div key={image} className="col m3 s12">
            <img
              className="cover-portfolio materialboxed"
              src={image}
              alt="cover"
            />{' '}
          </div>
        );
      });
    }
  };

  renderBoxPortfolio = (portfolio) => {
    for (let i = 0; i < portfolio.length; i++) {
      if (this.props.match.params.id === this.state.portfolio[i].id) {
        return <div>{this.renderMultipleImage(portfolio[i].imagePlus)}</div>;
      }
    }
  };

  render() {
    const { portfolio } = this.state;
    return (
      <div className="Portfolio">
        <div className="container">
          <h1>Mark Burleson | Design</h1>
          <div className="box-Portfolio">
            <div className="row">{this.renderBoxPortfolio(portfolio)}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Portfolio;
