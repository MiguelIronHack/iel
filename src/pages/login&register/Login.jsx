import React, { Component } from "react";
import { Heading } from "react-bulma-components";
import { setLocalToken } from "../../api/ajaxLogin";
import { login } from "../../api/userHandler";
import { Btn } from "../../components/Btn";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import _ from "lodash";

export default class Login extends Component {
  state = {
    email: "",
    password: ""
  };

  notifyError = message =>
    toast(message, {
      type: toast.TYPE.WARNING
    });

  onSubmit = e => {
    e.preventDefault();
    login({ email: this.state.email, password: this.state.password })
      .then(res => {
        if (res.data._id) {
          const data = _.pick(
            res.data,
            "avatar",
            "_id",
            "firstName",
            "lastName",
            "userName"
          );
          setLocalToken(data);
          // this.props.history.push("/profile");
          //this my dOOds is to refresh the state of the page to have
          // so the navbar state is refreshed with the current info
          window.location = "/profile";
        } else {
          this.props.history.push("/profile");
        }
      })
      .catch(err => this.notifyError("Email or password incorrect"));
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
        <p>Don't you have an account yet?</p>
        <Btn className="is-small" name="Create an Account" toPage="register" />
        <ToastContainer />
      </section>
    );
  }
}
