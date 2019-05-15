import React, { Component } from "react";
import { Progress, Heading } from "react-bulma-components";
import CourseTable from "../components/CourseTable";
import CourseSidePanel from "../components/CourseSidePanel";
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
            <h2 className="title">Week 1</h2>
            <CourseTable />
          </div>
        </div>
      </section>
    );
  }
}
