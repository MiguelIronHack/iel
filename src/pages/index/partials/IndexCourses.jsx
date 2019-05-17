import React, { Component } from "react";
import { getAllCourses } from "../../../api/coursesHandler";
import Course from "../../../components/CourseCard";
import Btn from "../../../components/Btn";
import { Heading, Columns } from "react-bulma-components";

export class IndexCourses extends Component {
  state = {
    courses: []
  };

  componentDidMount() {
    getAllCourses()
      .then(res => {
        this.setState({ courses: res.data });
      })
      .catch(err => console.error(err.response));
  }

  render() {
    const { courses } = this.state;
    return (
      <section className="index-courses m-p" id="index-courses">
        <Heading>Popular Courses</Heading>
        <Columns>
          {courses.map((course, index) => (
            <Columns.Column size={4} key={index}>
              <Course
                className="course-link"
                key={index}
                id={course._id}
                title={course.title}
                description={course.description}
                content={course.content}
                image={course.media.image}
              />
            </Columns.Column>
          ))}
        </Columns>
        <Btn className="mb" name="Explore Our Courses" toPage="explore" />
      </section>
    );
  }
}

export default IndexCourses;
