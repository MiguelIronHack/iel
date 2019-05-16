import React, { Component } from "react";
// import { NavLink } from "react-router-dom";
import { Card, Media, Image, Content, Heading } from "react-bulma-components";
import Moment from "react-moment";
import { getLocalToken } from "../api/ajaxLogin";
import { getUser } from "../api/userHandler";
import { editUser } from "../api/userHandler";

export class Course extends Component {
  state = {
    user: {}
  };

  componentDidMount() {}

  handleClick = e => {
    const courseId = e.id;
    // console.log(courseId, " course IDIDIDI");

    this.state.user.enrolledCourses.push(courseId);
    console.log(this.state.user, " user after enroll");
    const { enrolledCourses, _id } = this.state.user;
    editUser(_id, { enrolledCourses })
      .then(res => {
        console.log(res);
      })
      .catch(err => console.log(err));
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
            onClick={e => {
              return this.handleClick(this.props);
            }}
          >
            Enroll
          </button>
        </Card>
      </>
    );
  }
}

export default Course;
