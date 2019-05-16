import React, { Component } from "react";
import { getLocalToken } from "../api/ajaxLogin";
import { getUser, editUser } from "../api/userHandler";
import { Button } from "react-bulma-components";

export default class EnroleBtn extends Component {
  state = {
    user: {}
  };

  componentDidMount() {}

  handleClick = courseId => {
    const user = getLocalToken();
    if (user) {
      getUser(user._id)
        .then(({ data: user }) => {
          const enrolledCourses = user.enrolledCourses;
          let isAlreadyEnrolled;
          for (let course of enrolledCourses) {
            course._id === courseId
              ? (isAlreadyEnrolled = true)
              : (isAlreadyEnrolled = false);
          }
          if (isAlreadyEnrolled) return;
          enrolledCourses.push(courseId);
          editUser(user._id, { enrolledCourses })
            .then(res => console.log(res))
            .catch(err => console.error(err));
        })
        .catch(err => console.log(err));
    }
  };
  render() {
    return (
      <div>
        <Button
          className="is-primary category-btn"
          onClick={() => this.handleClick(this.props.id)}
        >
          Enroll Now!
        </Button>
      </div>
    );
  }
}
