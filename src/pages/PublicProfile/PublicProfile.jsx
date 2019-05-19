import React, { Component } from "react";
import { getUser } from "../../api/userHandler";

import getUserInfo from "./../../components/utils/getUserInfo";
class PublicProfile extends Component {
  state = {};

  componentDidMount() {
    const userId = this.props.match.params.id;
    getUser(userId)
      .then(({ data }) => console.log(getUserInfo(data)))
      .catch(err => console.log(err));
  }

  render() {
    if (this.state.user) console.log(this.state.user);
    return <h1>Welcome to the Public Profile</h1>;
  }
}

export default PublicProfile;
