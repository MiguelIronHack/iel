import React, { Component } from "react";
import { editUser } from "../../api/userHandler";

import UserCard from "./UserCard";
import SettingsForm from "./SettingsForm";
import "./user_settings.css";
class UserSettings extends Component {
  state = {
    isAuth: false,
    userName: this.props.match.params.user,
    userDescription: "Hey im here for niquer des meres !",
    isEditable: false
  };

  handleSubmit = data => {
    console.log(data);
    const { userName, firstName, avatar, lastName } = data;
    editUser(this.state.userId, { userName, firstName, avatar, lastName })
      .then(res => {
        console.log(res);
        this.setState(data);
      })
      .catch(err => console.log(err));
    window.localStorage.userCredential = JSON.stringify({
      ...data,
      _id: this.state.userId
    });
  };

  componentDidMount() {
    // console.log(JSON.parse(window.localStorage.userCredential));
    const user = JSON.parse(window.localStorage.userCredential);
    this.setState({
      firstName: user.firstName,
      lastName: user.lastName,
      avatar: user.avatar,
      userId: user._id
    });
  }
  handleClick = e => {};

  render() {
    // const { user: userName } = this.props.match.params;
    return (
      <div className="container columns is-12">
        <UserCard className="column is-4" data={this.state} />
        <SettingsForm
          className="column is-4"
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

export default UserSettings;
