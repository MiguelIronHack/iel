import React, { Component } from "react";
// import { NavLink } from "react-router-dom";
import { Card, Media, Image, Content, Heading } from "react-bulma-components";
import Moment from "react-moment";
import { getLocalToken } from "../api/ajaxLogin";
import { getUser, editUser } from "../api/userHandler";

export class Course extends Component {
  state = {
    user: {}
  };

  componentDidMount() {
    if (getLocalToken()) {
      const user = getLocalToken();
      getUser(user._id)
        .then(res => {
          this.setState({
            user: res.data
          });
          // console.log(this.state.user, " user before enroll");
        })
        .catch(err => console.error(err.response, "qqqqqq"));
      console.log(user, " eyeyeye this is the user");
    }
  }

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
    // console.log(userinfo);
    // this.state.user.enrolledCourses.push(courseId);
    // console.log(this.state.user, " user after enroll");
    // const { enrolledCourses, _id } = this.state.user;
    // userEnrolls(_id, { enrolledCourses })
    //   .then(res => {
    //     console.log(res);
    //   })
    //   .catch(err => console.log(err));
  };

  render() {
    return (
      <>
        <Card className="course-card shadow" data-id={this.props._id}>
          <Card.Content>
            <Media>
              <Media.Item
                className="course-img"
                renderAs="figure"
                position="left"
              >
                <Image alt={this.props.title} src={this.props.image} />
              </Media.Item>
              <Media.Item>
                <Heading size={5}>{this.props.title}</Heading>
                <p className="card-subtitle">{this.props.description}</p>
              </Media.Item>
            </Media>
            <Content>
              <Moment format="DD/MM/YYYY">{this.props.date}</Moment>
            </Content>
          </Card.Content>
          <button
            className="button card-btn"
            onClick={() => this.handleClick(this.props.id)}
          >
            Enroll
          </button>
        </Card>
      </>
    );
  }
}

export default Course;
