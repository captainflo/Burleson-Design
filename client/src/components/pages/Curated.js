import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Curated.css';

class Curated extends React.Component {
  state = {
    portfolio: [
      {
        id: '01',
        title: 'Atlanta',
        image: '/images/Atlanta01/02burleson-Atlanta.JPG',
      },
      {
        id: '02',
        title: 'Atlanta',
        image: '/images/Atlanta/burleson03.JPG',
      },
      {
        id: '03',
        title: 'Tampa',
        image: '/images/Tampa/burleson01.JPG',
      },
      {
        id: '04',
        title: 'New Orleans',
        image: '/images/new_orleans/burleson-design-new-orleans03.JPG',
      },
    ],
  };

  renderListofPorfolio = () => {
    return this.state.portfolio.map((item) => {
      return (
        <div className="col m6 s12" key={item.id}>
          <Link to={`/portfolio/${item.id}`}>
            <img
              className="cover"
              src={process.env.PUBLIC_URL + `${item.image}`}
              alt="cover"
            />
            <p style={{ color: '#fff' }} className="center">
              {item.title}
            </p>
          </Link>
        </div>
      );
    });
  };

  render() {
    return (
      <div className="Curated">
        <div className="container">
          <div className="box-curated">
            <div className="row">{this.renderListofPorfolio()}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Curated;
