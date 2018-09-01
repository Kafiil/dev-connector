import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';

import MainNavbar from './components/layout/MainNavbar';
import Footer from './components/layout/Footer';
import Landing from './components/layout/Landing';

import Login from './components/auth/Login';
import Register from './components/auth/Register';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <MainNavbar />
          <Route exact path="/" component={Landing} />
          <div className="container">
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
