import React, { Component } from "react";
import EditInput from "./EditInput";

export default class SettingsForm extends Component {
  state = {};

  raiseSubmit = e => {
    e.preventDefault();
    const children = e.target.children;
    for (let item of children) {
      console.log(item);
    }
  };

  handleChange = e => {
    console.log("change");
  };

  render() {
    const { userName, lastName, image, raiseSubmit } = this.props;
    return (
      <form className="column is-4" onSubmit={raiseSubmit}>
        <EditInput
          inputPlaceHolder={userName}
          onChange={this.handleChange}
          name="hey"
          label="User Name"
        />
        <EditInput
          inputPlaceHolder={lastName}
          name="ho"
          onChange={this.handleChange}
          label="Last Name"
        />
        <EditInput
          inputPlaceHolder={image}
          name="letsgo"
          onChange={this.handleChange}
          label="Image url"
        />
        <button className="button">Submit changes</button>
      </form>
    );
  }
}
