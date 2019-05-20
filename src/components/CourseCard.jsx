import React, { Component } from "react";
import { Card, Media, Image, Content, Heading } from "react-bulma-components";
import Moment from "react-moment";
import { getLocalToken } from "../api/ajaxLogin";
import { getUser, editUser } from "../api/userHandler";
import { Link } from "react-router-dom";
import Upvote from "./Upvote";
import { getCourse, rateCourse } from "../api/coursesHandler";

export class CourseCard extends Component {
  state = {
    user: {},
    liked: false,
    totalLikes: 0
  };

  componentDidMount() {
    getCourse(this.props.id)
      .then(({ data }) => {
        this.setState({ course: data });
        if (data.likes.indexOf(getLocalToken()._id) >= 0) {
          this.setState({
            totalLikes: data.likes.length,
            liked: true
          });
        }
      })
      .catch(err => {});
  }

  handleLike = course => {
    if (this.state.liked === false) {
      this.setState({ liked: true, totalLikes: this.state.totalLikes + 1 });

      rateCourse(course.id, getLocalToken()._id)
        .then(({ data }) => {
          this.setState({ liked: true });
        })
        .catch(err => {});
    }
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
    }
  };

  render() {
    const { image, title, description, date, _id } = this.props;
    const { course } = this.state;
    if (!course) return <h1>Nothing here</h1>;
    return (
      <>
        <Card className="course-card shadow" data-id={_id}>
          <Card.Content>
            <Link to={`/course/${this.props.id}`}>
              <Media>
                <Media.Item className="course-img" renderAs="figure">
                  <Image alt={title} src={image} />
                </Media.Item>
                <Media.Item>
                  <Heading size={5}>{title}</Heading>
                  <p className="card-subtitle">{description}</p>
                </Media.Item>
              </Media>
              <Content>
                <Link
                  className="user-profile"
                  to={"/user/profile/" + course.teacher[0]._id}
                >
                  {course.teacher[0].firstName}&nbsp;
                  {course.teacher[0].lastName}&nbsp;
                </Link>
                <Moment className="nav-link" calendar>
                  {date}
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
            <p>Upvotes: &nbsp; {this.state.totalLikes}</p>
          </div>
        </Card>
      </>
    );
  }
}

export default CourseCard;
