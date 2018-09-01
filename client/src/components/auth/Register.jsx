import React, { Component } from 'react';

export default class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      password: '',
      password2: ''
    };
  }
  handleChange = e => this.setState({ [e.target.name]: e.target.value });
  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
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
              className="form-control"
              name="name"
              id="name"
              placeholder="name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              onChange={this.handleChange}
              value={this.state.email}
              className="form-control"
              name="email"
              id="email"
              placeholder="email"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              onChange={this.handleChange}
              value={this.state.password}
              className="form-control"
              name="password"
              id="password"
              placeholder="password"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password2">Confirm Password</label>
            <input
              type="password"
              onChange={this.handleChange}
              value={this.state.password2}
              className="form-control"
              name="password2"
              id="password2"
              placeholder="Confirm the password"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
