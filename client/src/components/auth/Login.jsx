import React, { Component } from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

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
  handleChange = e => this.setState({ [e.target.name]: e.target.value });
  handleSubmit = e => {
    e.preventDefault();
    const loginInfo = {
      email: this.state.email,
      password: this.state.password
    };
    this.props.loginUser(loginInfo, this.props.history);
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
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              onChange={this.handleChange}
              value={this.state.email}
              className={classnames('form-control', {
                'is-invalid': errors.email
              })}
              name="email"
              id="email"
              placeholder="email"
            />
            {errors.email && (
              <div className="invalid-feedback">{errors.email}</div>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              onChange={this.handleChange}
              value={this.state.password}
              className={classnames('form-control', {
                'is-invalid': errors.password
              })}
              name="password"
              id="password"
              placeholder="password"
            />
            {errors.password && (
              <div className="invalid-feedback">{errors.password}</div>
            )}
          </div>

          <br />
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
