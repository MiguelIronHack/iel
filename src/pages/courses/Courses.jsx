import React, { Component } from "react";
import { Progress, Heading } from "react-bulma-components";
import CourseTable from "./partials/CourseTable";
import CourseSidePanel from "./partials/CourseSidePanel";
import "./course.css";

export default class Courses extends Component {
  render() {
    return (
      <section className="course-section columns is-mobile">
        <CourseSidePanel />
        <div className="course-content column is-four-fifths">
          <Heading size={2}>Course Title</Heading>
          <Progress max={100} value={25} color="success" id="progress" />
          <div className="box course-box">
            <Heading size={4}>Week 1</Heading>
            <CourseTable />
          </div>
          <div className="box course-box">
            <Heading size={4}>Week 2</Heading>
            <CourseTable />
          </div>
          <div className="box course-box">
            <Heading size={4}>Week 3</Heading>
            <CourseTable />
          </div>
        </div>
      </section>
    );
  }
}
