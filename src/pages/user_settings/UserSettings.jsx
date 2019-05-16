import React, { Component } from "react";
import { editUser } from "../../api/userHandler";
import UserCard from "./components/UserCard";
import SettingsForm from "./components/SettingsForm";
import { uploadImage } from "../../services/imageUploadAPI";
import { getLocalToken, setLocalToken } from "./../../api/ajaxLogin";
import handleSpecialCharacters from "../../components/utils/handleSpecialCharacters";

class UserSettings extends Component {
  state = {
    isAuth: false,
    errors: {}
  };

  validateProperty = ({ name, value }) => {
    if (name === "firstName") {
      if (value.trim() === "") return "Cannot submit Empty field";
      // ...
    }
    if (name === "lastName") {
      if (value.trim() === "") return "Cannot submit empty field";
      // ...
    }
    if (name === "userName") {
      if (value.trim() === "") return "Cannot submit empty field";
      // ...
    }
  };

  //TODO ADD INPUT FILE COMPONENT TO ADD IMAGES

  handleSubmit = e => {
    e.preventDefault();
    const { userName, firstName, avatar, lastName, _id } = this.state.user;
    editUser(_id, { userName, firstName, avatar, lastName })
      .then(res => {
        console.log(res);
      })
      .catch(err => console.log(err));
    setLocalToken(this.state.user);
  };

  componentDidMount() {
    const user = getLocalToken();
    this.setState({ user });
  }

  handleClick = e => {};

  handleChange = e => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(e.currentTarget);
    const key = e.currentTarget.name;
    let value = e.currentTarget.value;
    if (key === "userName" || key === "firstName") {
      value = handleSpecialCharacters(value);
    }
    if (errorMessage) errors[key] = errorMessage;
    else delete errors[key];
    const user = { ...this.state.user };
    user[key] = value;
    this.setState({ user, errors });
  };

  handleImage = e => {
    uploadImage(e)
      .then(res => {
        const imageUrl = res.data.results[0].secure_url;
        const user = getLocalToken();
        user.avatar = imageUrl;
        setLocalToken(user);
        const user2 = { ...this.state.user };
        user2.avatar = imageUrl;
        this.setState({ user: user2 });
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <section className="profile-settings-section">
        <div className="container columns is-12 shadow">
          <div className="column is-5 profile-user-info">
            <UserCard user={this.state.user} handleImage={this.handleImage} />
          </div>
          <div className="column is-5">
            <SettingsForm
              errors={this.state.errors}
              user={this.state.user}
              handleSubmit={this.handleSubmit}
              handleChange={this.handleChange}
            />
          </div>
        </div>
      </section>
    );
  }
}

export default UserSettings;
