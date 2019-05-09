import React, { Component } from "react";

import UserCard from "./UserCard";
import SettingsForm from "./SettingsForm";
import "./user_settings.css";
class UserSettings extends Component {
  state = {
    isAuth: false,
    userName: this.props.match.params.user,
    lastName: "Ola",
    firstName: "Quetal",

    userDescription: "Hey im here to learn to code !",
    isEditable: false
  };

  handleClick = e => {};
  render() {
    const { user: userName } = this.props.match.params;
    return (
      <div className="container columns is-12">
        <SettingsForm className="column is-4" submit={this.handleSubmit} />
        <UserCard className="column is-4" data={this.state} />
      </div>
    );
  }
}

export default UserSettings;
