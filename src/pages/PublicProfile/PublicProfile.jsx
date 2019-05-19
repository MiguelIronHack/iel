import React, { Component } from "react";
import { getUserPublic } from "../../api/userHandler";
import UserPublicCard from "./../../components/UserPublicCard";
import TagChart from "../profile/TagChart";
class PublicProfile extends Component {
  state = {};

  componentDidMount() {
    const userId = this.props.match.params.id;
    getUserPublic(userId)
      .then(({ data: user }) => this.setState({ user }))
      .catch(err => console.log(err));
  }

  render() {
    if (this.state.user) console.log(this.state.user);
    return (
      <section className="section">
        <div className="columns is-12">
          <div className=" container shadow column is-5">
            <div className=" profile-user-info">
              <UserPublicCard user={this.state.user} />
            </div>
          </div>
          <div className="column is-7">
            <ul className="categories-menu">
              <li>Created Courses</li>
              <li>Finished Courses</li>
              <li>Attended Courses</li>
              <li>Overview</li>
            </ul>
          </div>
        </div>
      </section>
    );
  }
}

export default PublicProfile;
