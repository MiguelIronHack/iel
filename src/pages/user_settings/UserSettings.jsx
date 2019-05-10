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
    image:
      "https://c-7npsfqifvt0x24hbnfqfejbx2edvstfdeox2edpn.g00.gamepedia.com/g00/3_c-7tusfbnfst.hbnfqfejb.dpn_/c-7NPSFQIFVT0x24iuuqtx3ax2fx2fhbnfqfejb.dvstfdeo.dpnx2fux78judi_hbnfqfejbx2f2x2f2bx2fJnbruqjf.QOHx3fwfstjpox3df429e3251gee9g70830cb847g67d3930x26j21d.nbslx3djnbhf_$/$/$/$/$",
    userDescription: "Hey im here to learn to code !",
    isEditable: false
  };

  handleSubmit = data => {
    this.setState(data);
  };

  handleClick = e => {};

  render() {
    const { user: userName } = this.props.match.params;
    return (
      <div className="container columns is-12">
        <SettingsForm
          className="column is-4"
          handleSubmit={this.handleSubmit}
        />
        <UserCard className="column is-4" data={this.state} />
      </div>
    );
  }
}

export default UserSettings;
