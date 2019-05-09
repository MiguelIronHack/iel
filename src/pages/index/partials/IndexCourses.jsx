import React, { Component } from "react";
import { getAllCourses } from "../../../api/coursesHandler";
import Course from "../components/Course";
import Btn from "../../../components/Btn";
import { Heading, Columns } from "react-bulma-components";

export class IndexCourses extends Component {
  state = { courses: [] };

  componentDidMount() {
    getAllCourses()
      .then(res => {
        console.log("taking data ", res.data);
        this.setState({ courses: res.data });
        console.log("testing state after taking data ", this.state.courses);
      })
      .catch(err => console.error(err.response));
  }

  render() {
    const { courses } = this.state;
    return (
      <section className="index-courses m-p" id="index-courses">
        <Heading>Title</Heading>
        <Columns>
          {courses.map((course, index) => (
            <Columns.Column size={3} key={index}>
              <Course
                className="course-link"
                title={course.title}
                description={course.description}
                content={course.content}
                image={course.image}
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
