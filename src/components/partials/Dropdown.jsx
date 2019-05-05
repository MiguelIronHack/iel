import React from "react";
import { Dropdown } from "react-bulma-components";

export default class NavBarDropdown extends React.Component {
  state = {
    selected: "active"
  };
  onChange = selected => {
    this.setState({ selected });
  };
  render() {
    return (
      <Dropdown
        className="columns is-vcentered has-margin-left-4 is-hoverable"
        value={this.state.selected}
        onChange={this.onChange}
      >
        <Dropdown.Item value="active">Login</Dropdown.Item>
        <Dropdown.Item value="other 2">Register</Dropdown.Item>
      </Dropdown>
    );
  }
}
