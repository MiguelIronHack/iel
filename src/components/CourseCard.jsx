import React, { Component } from "react";
// import { NavLink } from "react-router-dom";
import { Card, Media, Image, Content, Heading } from "react-bulma-components";
import Moment from "react-moment";
import { getLocalToken } from "../api/ajaxLogin";
import { getUser, editUser } from "../api/userHandler";
import { Link } from "react-router-dom";
import Upvote from "./Upvote";
import { getCourse, rateCourse } from "../api/coursesHandler";

export class Course extends Component {
  state = {
    user: {}
  };

  componentDidMount() {
    getCourse(this.props.id)
      .then(({ data }) => {
        if (data.likes.indexOf(getLocalToken()._id) >= 0)
          this.setState({ totalLikes: data.likes.length, liked: true });
      })
      .catch(err => {});
  }

  handleLike = course => {
    getCourse(course.id)
      .then(({ data }) => {
        if (data.likes.indexOf(getLocalToken()._id) >= 0) return;
        rateCourse(course.id, getLocalToken()._id)
          .then(({ data }) =>
            this.setState({
              totalLikes: this.state.totalLikes + 1,
              liked: true
            })
          )
          .catch(err => {});
      })
      .catch(err => console.log(err));
  };

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
    } //TODO PROBABLY HAVE TO BE DEALING WITH THE EDIT USER STATE DUNNO
  };

  render() {
    return (
      <>
        <Card className="course-card shadow" data-id={this.props._id}>
          <Card.Content>
            <Link to={`/course/${this.props.id}`}>
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
                <Moment className="nav-link" format="DD/MM/YYYY">
                  {this.props.date}
                </Moment>
              </Content>
            </Link>
          </Card.Content>
          <div className="card-btn">
            <button
              className="button"
              onClick={() => this.handleClick(this.props.id)}
            >
              Enroll
            </button>
            <Upvote
              course={this.props}
              liked={this.state.liked}
              like={this.handleLike}
            />
            <p>Upvotes: &nbsp; {this.state.totalLikes || 0}</p>
          </div>
        </Card>
      </>
    );
  }
}

export default Course;
