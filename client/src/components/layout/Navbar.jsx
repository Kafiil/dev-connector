import React, { Component } from 'react';

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-3">
          <a className="navbar-brand" href="#">
            DevConnectors
          </a>
          <button
            className="navbar-toggler hidden-lg-up"
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          />
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Users
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Profiles
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
