import React from "react";
import { Dropdown } from "react-bulma-components";
import { logout } from "../api/userHandler";
// import { faJava } from "@fortawesome/free-brands-svg-icons";
// import DropdownItem from "./DropdownItem";

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
  // handleClick = e => {
  //   this.props.history.push("/login");
  // };
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
            <div onClick={() => this.props.history.push("/profile")}>
              Profile
            </div>
          </Dropdown.Item>

          <Dropdown.Item value="settings">
            <div onClick={() => this.props.history.push("/settings")}>
              Settings
            </div>
          </Dropdown.Item>
          <Dropdown.Item value="sign-out">
            <div onClick={() => this.handleSignOut()}>Sign Out</div>
          </Dropdown.Item>
        </Dropdown>
      );

    return (
      <Dropdown
        className="navmain-dropdown columns is-vcentered has-margin-left-4 is-hoverable"
        value={this.state.selected}
        onChange={this.onChange}
      >
        <Dropdown.Item value="login">
          <div onClick={() => this.props.history.push("/login")}>Login</div>
        </Dropdown.Item>
        <Dropdown.Item value="sign-up">
          <div onClick={() => this.props.history.push("/register")}>
            Sign Up
          </div>
        </Dropdown.Item>
      </Dropdown>
    );
  }
}
