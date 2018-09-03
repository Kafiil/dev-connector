import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import TextFieldGroup from '../common/TextFieldGroup';

import { loginUser } from '../../actions/authActions';

class Login extends Component {
  initialState = {
    email: '',
    password: '',
    errors: {}
  };
  constructor() {
    super();
    this.state = this.initialState;
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const loginInfo = {
      email: this.state.email,
      password: this.state.password
    };
    this.props.loginUser(loginInfo, this.props.history);
  };

  componentDidMount = () => {
    // Redirect if the user in already logged in
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/dashboard');
    }
  };

  componentWillReceiveProps = nextProps => {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }

    if (nextProps.auth.isAuthenticated) {
      this.props.history.push('/dashboard');
    }
  };
  render() {
    const { errors } = this.state;
    return (
      <div>
        <h1 className="text-center">Log In</h1>
        <form onSubmit={this.handleSubmit}>
          <TextFieldGroup
            name="email"
            type="email"
            onChange={this.handleChange}
            value={this.state.email}
            error={errors.email}
          />

          <TextFieldGroup
            name="password"
            type="password"
            onChange={this.handleChange}
            value={this.state.password}
            error={errors.password}
          />

          <button type="submit" className="btn btn-primary">
            Log In
          </button>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});
export default connect(
  mapStateToProps,
  { loginUser }
)(withRouter(Login));
