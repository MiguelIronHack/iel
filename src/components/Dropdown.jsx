import React from "react";
import { Dropdown } from "react-bulma-components";
import { logout } from "../api/userHandler";
import Dashboard from "./../pages/dashboard/Dashboard";

export default class NavBarDropdown extends React.Component {
  state = {
    selected: "active",
    firstName: "",
    lastName: "",
    isAuth: false
  };
  onChange = selected => {
    this.setState({ selected });
  };

  handleSignOut = e => {
    logout()
      .then(res => {
        console.log(res);
      })
      .catch(err => console.log("fuck"));
    window.location = "/";
  };
  handleClick = e => {
    console.log("hey");
  };
  componentDidMount() {
    if (window.localStorage.userCredential) {
      this.setState({
        firstName: JSON.parse(window.localStorage.userCredential).firstName,
        lastName: JSON.parse(window.localStorage.userCredential).lastName,
        isAuth: true
      });
    } else {
      this.setState({ isAuth: false });
    }
  }

  render() {
    const { isAuth } = this.state;
    if (isAuth)
      return (
        <Dropdown
          className="navmain-dropdown columns is-vcentered has-margin-left-4 is-hoverable"
          value={this.state.selected}
          onChange={this.onChange}
        >
          <Dropdown.Item value="username">
            <div onClick={() => console.log("user")}>Username</div>
          </Dropdown.Item>
          <Dropdown.Item value="settings">
            <div onClick={this.handleClick}>Settings</div>
          </Dropdown.Item>
          <Dropdown.Item value="sign-out">
            <div onClick={this.handleClick}>Sign Out</div>
          </Dropdown.Item>
        </Dropdown>
      );

    return (
      <Dropdown
        className="navmain-dropdown columns is-vcentered has-margin-left-4 is-hoverable"
        value={this.state.selected}
        onChange={this.onChange}
      >
        <Dropdown.Item value="sign-up">
          <div onClick={this.handleClick}>Sign Up</div>
        </Dropdown.Item>
        <Dropdown.Item value="register">
          <div onClick={this.handleClick}>Register</div>
        </Dropdown.Item>
      </Dropdown>
    );
  }
}
