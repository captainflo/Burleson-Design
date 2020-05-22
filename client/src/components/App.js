import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';

import Welcome from './pages/Welcome';
import Footer from './utils/Footer';

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Route exact path="/" component={Welcome} />
          <Footer />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
