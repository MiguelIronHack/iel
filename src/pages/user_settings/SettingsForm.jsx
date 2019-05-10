import React, { Component } from "react";
import EditInput from "./EditInput";

export default class SettingsForm extends Component {
  state = {};

  raiseSubmit = e => {
    e.preventDefault();
    this.props.handleSubmit({
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      userName: this.state.userName,
      image: this.state.image
    });
  };

  handleChange = e => {
    this.setState({ [e.currentTarget.name]: e.currentTarget.value });
    console.log(this.state);
  };
  prevent = e => {
    e.preventDefault();
  };

  render() {
    const { userName, lastName, image, firstName } = this.state;
    return (
      <React.Fragment>
        <form id={userName} onSubmit={this.raiseSubmit} className="column is-4">
          <EditInput
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
            inputPlaceHolder={image}
            name="image"
            onChange={this.handleChange}
            label="Image url"
          />
          <button className="button">Save Changes</button>
        </form>
      </React.Fragment>
    );
  }
}
