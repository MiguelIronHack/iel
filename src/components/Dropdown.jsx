import React from "react";
import { Dropdown } from "react-bulma-components";
import { NavLink } from "react-router-dom";
import { logout } from "../api/userHandler";

export default class NavBarDropdown extends React.Component {
  state = {
    selected: "active",
    user: "",
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

  componentDidMount() {
    if (window.localStorage.userCredential) {
      this.setState({ isAuth: true });
    } else {
      this.setState({ isAuth: false });
    }
  }

  render() {
    console.log(this.state.isAuth);
    return (
      <Dropdown
        className="columns is-vcentered has-margin-left-4 is-hoverable "
        value={this.state.selected}
        onChange={this.onChange}
      >
        <Dropdown.Item value="login">
          <NavLink className="has-text-dark" to="/login">
            {this.state.user ? this.state.user : "Login"}
          </NavLink>
        </Dropdown.Item>

        {this.state.isAuth ? (
          <React.Fragment>
            <Dropdown.Item value="settings">
              <NavLink to={`/profile/${this.state.user}/settings`}>
                Settings
              </NavLink>
            </Dropdown.Item>
            <Dropdown.Item onClick={this.handleSignOut} value="settings">
              Sign Out
            </Dropdown.Item>
          </React.Fragment>
        ) : (
          <Dropdown.Item value="register">
            <NavLink to="/register">Register</NavLink>
          </Dropdown.Item>
        )}
      </Dropdown>
    );
  }
}
