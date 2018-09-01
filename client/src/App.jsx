import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';

import MainNavbar from './components/layout/MainNavbar';
import Footer from './components/layout/Footer';
import Landing from './components/layout/Landing';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <MainNavbar />
          <Route exact path="/" component={Landing} />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
