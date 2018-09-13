import React, { Component } from 'react';
import propTypes from 'prop-types';
import { logoutUser } from '../../actions/authActions';
import { clearCurrentProfile } from '../../actions/profileActions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from 'reactstrap';

class MainNavbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };
  }

  toggleItem = () => {
    if (this.state.isOpen) this.setState({ isOpen: false });
  };

  logout = e => {
    e.preventDefault();
    this.props.clearCurrentProfile();
    this.props.logoutUser();
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };
  render() {
    const { isAuthenticated, user } = this.props.auth;

    const authLinks = (
      <React.Fragment>
        <Nav navbar>
          <NavItem>
            <Link
              className="nav-link"
              onClick={this.toggleItem}
              to="/dashboard"
            >
              &nbsp; Dashboard
            </Link>
          </NavItem>
          <NavItem>
            <Link className="nav-link" onClick={this.toggleItem} to="/profiles">
              &nbsp; Profiles
            </Link>
          </NavItem>
          <NavItem>
            <Link className="nav-link" onClick={this.toggleItem} to="/users">
              &nbsp; Users
            </Link>
          </NavItem>
        </Nav>
        <Nav className="ml-auto" navbar>
          {user && (
            <NavItem>
              <a href="" className="nav-link">
                &nbsp;
                <img
                  className="rounded-circle"
                  style={{ width: '25px', marginRight: '5px' }}
                  src={user.avatar}
                  alt=""
                />
                {`Hello ${user.name}`}
              </a>
            </NavItem>
          )}
          <NavItem>
            <a href="" className="nav-link" onClick={this.logout}>
              &nbsp; Log Out
            </a>
          </NavItem>
        </Nav>
      </React.Fragment>
    );

    const guestLinks = (
      <Nav className="ml-auto" navbar>
        <NavItem>
          <Link className="nav-link" onClick={this.toggleItem} to="/login">
            &nbsp; Log In
          </Link>
        </NavItem>
        <NavItem>
          <Link className="nav-link" onClick={this.toggleItem} to="/register">
            &nbsp; Register
          </Link>
        </NavItem>
      </Nav>
    );
    return (
      <div>
        <Navbar color="dark" dark expand="md" className="mb-3">
          <Link className="navbar-brand" to="/">
            DevConnectors
          </Link>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            {/* Auth Nav */}
            {isAuthenticated && authLinks}
            {!isAuthenticated && guestLinks}

            {/* Menu Nav */}
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

MainNavbar.propTypes = {
  logoutUser: propTypes.func.isRequired,
  auth: propTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser, clearCurrentProfile }
)(MainNavbar);
