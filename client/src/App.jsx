import React, { Component } from 'react';
//React-router
import { BrowserRouter, Route } from 'react-router-dom';
//Redux
import { Provider } from 'react-redux';
import store from './store';

// components
import MainNavbar from './components/layout/MainNavbar';
import Footer from './components/layout/Footer';
import Landing from './components/layout/Landing';
import Login from './components/auth/Login';
import Register from './components/auth/Register';

// Css
import './App.css';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
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
      </Provider>
    );
  }
}
