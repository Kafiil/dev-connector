import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from 'reactstrap';

export default class MainNavbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };
  render() {
    return (
      <div>
        <Navbar color="dark" dark expand="md" className="mb-3">
          <Link className="navbar-brand" to="/">
            DevConnectors
          </Link>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            {/* Auth Nav */}
            <Nav navbar>
              <NavItem>
                <Link className="nav-link" to="/profiles">
                  &nbsp; Profiles
                </Link>
              </NavItem>
              <NavItem>
                <Link className="nav-link" to="/users">
                  &nbsp; Users
                </Link>
              </NavItem>
            </Nav>
            {/* Menu Nav */}
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link className="nav-link" to="/login">
                  &nbsp; Sign In
                </Link>
              </NavItem>
              <NavItem>
                <Link className="nav-link" to="/register">
                  &nbsp; Register
                </Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
