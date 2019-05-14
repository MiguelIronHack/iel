import React, { Component } from "react";
import { Heading } from "react-bulma-components";
import "./loginRegister.css";
import { createUser } from "../../api/userHandler";
import Dropdown from "../../components/RealDropDown";

export default class CreateUser extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    password2: "",
    role: ""
  };

  componentDidMount() {
    this.setState({
      role: "admin"
    });
  }

  onSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    createUser({
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      role: this.state.role,
      userName: this.state.firstName,
      password: this.state.password,
      password2: this.state.password2
    })
      .then(res => {
        console.log(res.data);
        this.props.history.push("/profile");
      })
      .catch(err => console.log(err.response));
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
    console.log(this.state.firstName);
    console.log(this.state.role);
  };

  selectRole = e => {
    console.log(e);
    this.setState({ role: e.currentTarget.value });
  };

  render() {
    const {
      firstName,
      lastName,
      email,
      role,
      password,
      password2
    } = this.state;
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
            <label htmlFor="role">role</label>
            <select
              value={role}
              onChange={this.selectRole}
              // onChange={this.onChange}
              className="input"
              name="role"
            >
              <option value="admin">Admin</option>
              <option value="user">User</option>
            </select>
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
