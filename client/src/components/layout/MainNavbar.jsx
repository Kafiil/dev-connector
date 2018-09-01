import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

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
          <a className="navbar-brand" href="/">
            DevConnectors
          </a>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            {/* Auth Nav */}
            <Nav navbar>
              <NavItem>
                <NavLink href="/profiles">&nbsp; Profiles</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/users">&nbsp; Users</NavLink>
              </NavItem>
            </Nav>
            {/* Menu Nav */}
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/login">&nbsp; Sign In</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/register">&nbsp; Register</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
