import React, { Component } from "react";
import { Heading } from "react-bulma-components";
import "./loginRegister.css";

export default class Register extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    password2: ""
  };

  onSubmit = e => {
    e.preventDefault();
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
    console.log(this.state.firstName);
  };

  render() {
    const { firstName, lastName, email, password, password2 } = this.state;
    return (
      <section className="login-register-section">
        <Heading className="has-text-centered	">Register</Heading>
        <form className="register-form box" onSubmit={this.onSubmit}>
          <div className="control">
            <label htmlFor="firstName">First Name</label>
            <input
              value={firstName}
              onChange={this.onChange}
              className="input"
              placeholder="input your first name here..."
              name="firstName"
              type="text"
            />
            <label htmlFor="lastName">Last Name</label>
            <input
              value={lastName}
              onChange={this.onChange}
              className="input"
              placeholder="input your last name here..."
              name="lastName"
              type="text"
            />
            <label htmlFor="email">Email</label>
            <input
              value={email}
              onChange={this.onChange}
              className="input"
              placeholder="input your email here..."
              name="email"
              type="email"
            />
            <label htmlFor="password">Password</label>
            <input
              value={password}
              onChange={this.onChange}
              className="input"
              placeholder="input your password here..."
              name="password"
              type="password"
            />
            <label htmlFor="password2">Password confirmation</label>
            <input
              value={password2}
              onChange={this.onChange}
              className="input"
              placeholder="input your password here..."
              name="password2"
              type="password"
            />
          </div>
          <button className="button is-primary  is-focused">Submit</button>
        </form>
      </section>
    );
  }
}
