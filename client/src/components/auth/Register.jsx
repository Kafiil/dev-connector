import React, { Component } from 'react';
import axios from 'axios';
import classnames from 'classnames';
export default class Register extends Component {
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
  handleChange = e => this.setState({ [e.target.name]: e.target.value });
  handleSubmit = e => {
    e.preventDefault();
    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };
    axios
      .post('/api/users/register', newUser)
      .then(_res => this.setState(this.initialState))
      .catch(err => {
        this.setState({ errors: err.response.data });
      });
  };

  render() {
    const { errors } = this.state;
    return (
      <div>
        <h1 className="text-center">Register</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="name"
              onChange={this.handleChange}
              value={this.state.name}
              className={classnames('form-control', {
                'is-invalid': errors.name
              })}
              name="name"
              id="name"
              placeholder="name"
            />
            {errors.name && (
              <div className="invalid-feedback">{errors.name}</div>
            )}
          </div>

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
          <div className="form-group">
            <label htmlFor="password2">Confirm Password</label>
            <input
              type="password"
              onChange={this.handleChange}
              value={this.state.password2}
              className={classnames('form-control', {
                'is-invalid': errors.name
              })}
              name="password2"
              id="password2"
              placeholder="Confirm the password"
            />
            {errors.password2 && (
              <div className="invalid-feedback">{errors.password2}</div>
            )}
          </div>
          <br />
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
