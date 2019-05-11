import React, { Component } from "react";
import EditInput from "./EditInput";
import axios from "axios";
export default class SettingsForm extends Component {
  state = {};

  raiseSubmit = e => {
    e.preventDefault();
    this.props.handleSubmit({
      firstName: this.state.firstName,
      lastName: this.state.lastName,

      userName: this.state.userName,
      avatar: this.state.avatar
    });
  };

  handleImage = e => {
    const files = Array.from(e.target.files);
    const formData = new FormData();
    files.forEach((file, i) => {
      formData.append(i, file);
    });

    axios
      .post("http://localhost:4000/upload/image", formData)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  handleChange = e => {
    this.setState({ [e.currentTarget.name]: e.currentTarget.value });
    console.log(this.state);
  };
  prevent = e => {
    e.preventDefault();
  };

  render() {
    const { userName, lastName, avatar, firstName } = this.state;
    return (
      <React.Fragment>
        <form id={userName} onSubmit={this.raiseSubmit} className="column is-4">
          <EditInput
            props={this.props}
            inputPlaceHolder={userName}
            onChange={this.handleChange}
            name="userName"
            label="User Name"
          />
          <EditInput
            inputPlaceHolder={firstName}
            onChange={this.handleChange}
            name="firstName"
            label="First Name"
            id="firstName"
          />
          <EditInput
            inputPlaceHolder={lastName}
            name="lastName"
            onChange={this.handleChange}
            label="Last Name"
          />
          <EditInput
            inputPlaceHolder={avatar}
            name="avatar"
            onChange={this.handleChange}
            label="Image url"
          />
          <button className="button">Save Changes</button>
        </form>
        <input
          type="file"
          id="avatar2"
          name="avatar2"
          accept="image/png, image/jpeg"
          onChange={this.handleImage}
        />
      </React.Fragment>
    );
  }
}
