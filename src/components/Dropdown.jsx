import React from "react";
import { Dropdown } from "react-bulma-components";
import { NavLink } from "react-router-dom";

export default class NavBarDropdown extends React.Component {
  state = {
    selected: "active",
    user: "",
    isAuth: false
  };
  onChange = selected => {
    this.setState({ selected });
  };
  render() {
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
          <Dropdown.Item value="settings">
            <NavLink to={`/profile/${this.state.user}/settings`}>
              Settings
            </NavLink>
          </Dropdown.Item>
        ) : (
          <Dropdown.Item value="register">
            <NavLink to="/register">Register</NavLink>
          </Dropdown.Item>
        )}
      </Dropdown>
    );
  }
}
