import React, { Component } from "react";
import { Heading } from "react-bulma-components";
import { setLocalToken } from "../../api/ajaxLogin";
import { login } from "../../api/userHandler";

export default class Login extends Component {
  state = {
    email: "",
    password: ""
  };

  onSubmit = e => {
    e.preventDefault();
    login({ email: this.state.email, password: this.state.password })
      .then(res => {
        console.log(res.data);
        if (res.data._id) {
          setLocalToken(res.data._id);
          this.props.history.push("/dashboard");
        } else {
          this.props.history.push("/login");
        }
      })
      .catch(err => this.props.history.push("/login"));
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    // console.log(this.state.email);
    // console.log(this.state.password);
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
