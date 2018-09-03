import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { registerUser } from '../../actions/authActions';
import TextFieldGroup from '../common/TextFieldGroup';

class Register extends Component {
  initialState = {
    name: '',
    email: '',
    password: '',
    password2: '',
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
    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };
    this.props.registerUser(newUser, this.props.history);
  };

  componentDidMount = () => {
    // Redirect if the user in already logged in
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/');
    }
  };

  componentWillReceiveProps = nextProp => {
    if (nextProp.errors) {
      this.setState({
        errors: nextProp.errors
      });
    }
  };

  render() {
    const { errors } = this.state;

    return (
      <div>
        <h1 className="text-center">Register</h1>
        <form onSubmit={this.handleSubmit}>
          <TextFieldGroup
            name="name"
            type="name"
            onChange={this.handleChange}
            value={this.state.name}
            error={errors.name}
          />

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

          <TextFieldGroup
            name="password2"
            type="password"
            onChange={this.handleChange}
            value={this.state.password2}
            error={errors.password2}
            placeholder="Confirm the password"
            label="Password, again"
          />

          <br />
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

Register.prototypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Register));
