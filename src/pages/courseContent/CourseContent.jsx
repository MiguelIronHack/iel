import React, { Component } from "react";
import { Heading } from "react-bulma-components";
import CourseSidePanel from "../components/CourseSidePanel";
import LessonTable from "../components/LessonTable";

import "../courses/Courses";
export default class Courses extends Component {
  render() {
    return (
      <section className="course-section columns is-mobile">
        <CourseSidePanel />
        <div className="course-content column is-four-fifths ">
          <Heading size={2}>Course Title</Heading>
          <LessonTable />
          <LessonTable />
          <Heading size={4}>Week 3</Heading>
          <LessonTable />
        </div>
      </section>
    );
  }
}
