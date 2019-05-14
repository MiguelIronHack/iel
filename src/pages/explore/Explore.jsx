import React, { Component } from "react";
import courseCard from "../../components/CourseCard";
import { getAllCourses } from "../../api/coursesHandler.js";
import { getAllCategories } from "../../api/categoryHandler.js";

export default class Explore extends Component {
  state = { courses: [] };

  componentDidMount() {
    getAllCourses()
      .then(res => {
        this.setState({ courses: res.data });
      })
      .catch(err => console.log(err.response));
  }

  render() {
    const { courses } = this.state;

    return (
      <React.Fragment>
        {courses.map((course, index) => {
          console.log({ course });
        })}
      </React.Fragment>
    );
  }
}
