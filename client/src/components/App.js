import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import M from 'materialize-css/dist/js/materialize.min.js';
import './App.css';

import Welcome from './pages/Welcome';
import Header from './utils/Header';
import Contact from './pages/Contact';
import About from './pages/About';
import Curated from './pages/Curated';
import Portfolio from './pages/Portfolio';

class App extends React.Component {
  componentDidMount() {
    // Sidebar
    var elems = document.querySelectorAll('.sidenav');
    M.Sidenav.init(elems, {});
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <Header />
          <Route exact path="/" component={Welcome} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/about" component={About} />
          <Route exact path="/curated" component={Curated} />
          <Route exact path="/portfolio/:id" component={Portfolio} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
