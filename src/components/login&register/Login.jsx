import React, { Component } from "react";
import { Heading } from "react-bulma-components";

export default class Login extends Component {
  state = {
    email: "",
    password: ""
  };

  onSubmit = e => {
    e.preventDefault();
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
    console.log(this.state.email);
  };

  render() {
    const { email, password } = this.state;
    return (
      <section className="login-register-section">
        <Heading className="has-text-centered	">Login</Heading>
        <form className="register-form box" onSubmit={this.onSubmit}>
          <div className="control">
            <label htmlFor="email">Email</label>
            <input
              value={email}
              onChange={this.onChange}
              className="input"
              placeholder="email"
              name="email"
              type="email"
            />
            <label htmlFor="password">Password</label>
            <input
              value={password}
              onChange={this.onChange}
              className="input"
              placeholder="password"
              name="password"
              type="password"
            />
          </div>
          <button className="button is-primary  is-focused">Submit</button>
        </form>
      </section>
    );
  }
}
