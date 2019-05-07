import React, { Component } from "react";
import { getAllCourses } from "../../../api/coursesHandler";
import Course from "./components/Course";
import Btn from "../../partials/Btn";
import { Heading, Columns } from "react-bulma-components";

export class IndexCourses extends Component {
  state = {
    title: "",
    description: "",
    image: "",
    date: ""
  };

  componentDidMount() {
    getAllCourses()
      .then(res => console.log(res.data))
      .catch(err => console.error(err));
  }

  render() {
    return (
      <section className="index-courses m-p" id="index-courses">
        <Heading>Title</Heading>
        <Columns>
          <Columns.Column size={3}>
            <Course
              className="course-link"
              courseContent={this.props.courseContent}
            />
          </Columns.Column>
          <Columns.Column size={6}>
            <Course
              className="course-link"
              courseContent={this.props.courseContent}
            />
          </Columns.Column>
          <Columns.Column size={3}>
            <Course
              className="course-link"
              courseContent={this.props.courseContent}
            />
          </Columns.Column>
          <Columns.Column size={3}>
            <Course
              className="course-link"
              courseContent={this.props.courseContent}
            />
          </Columns.Column>
          <Columns.Column size={3}>
            <Course
              className="course-link"
              courseContent={this.props.courseContent}
            />
          </Columns.Column>
          <Columns.Column size={3}>
            <Course
              className="course-link"
              courseContent={this.props.courseContent}
            />
          </Columns.Column>
          <Columns.Column size={3}>
            <Course
              className="course-link"
              courseContent={this.props.courseContent}
            />
          </Columns.Column>
        </Columns>
        <Btn className="mb" name="Explore Our Courses" />
      </section>
    );
  }
}

export default IndexCourses;
