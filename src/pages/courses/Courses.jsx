import React, { Component } from "react";
import { Progress, Heading } from "react-bulma-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComments,
  faBook,
  faCircle,
  faCheckCircle
} from "@fortawesome/free-solid-svg-icons";
import CourseTable from "./partials/CourseTable";
import "./course.css";

export default class Courses extends Component {
  render() {
    return (
      <section className="course-section columns is-mobile">
        <aside className="panel course-panel column">
          <p className="panel-heading" />

          <label className="panel-block has-background-dark has-text-white aside-panel-text">
            Week 1
            <span className="panel-icon aside-panel-icon">
              <FontAwesomeIcon icon={faCircle} />
            </span>
          </label>
          <label className="panel-block has-background-dark has-text-white aside-panel-text">
            Week 2
            <span className="panel-icon aside-panel-icon">
              <FontAwesomeIcon icon={faCircle} />
            </span>
          </label>
          <label className="panel-block has-background-dark has-text-white aside-panel-text">
            Week 3
            <span className="panel-icon aside-panel-icon">
              <FontAwesomeIcon icon={faCircle} />
            </span>
          </label>

          <div className="panel-block is-active has-background-dark has-text-white">
            <div className="aside-panel-text">Forum</div>
            <span className="panel-icon aside-panel-icon">
              <FontAwesomeIcon icon={faComments} />
            </span>
          </div>

          <div className="panel-block has-background-dark has-text-white">
            <div className="aside-panel-text"> Info</div>
            <span className="panel-icon aside-panel-icon">
              <FontAwesomeIcon icon={faBook} />
            </span>
          </div>
          <p className="panel-heading" />
        </aside>
        <div
          className="course-content column is-four-fifths
"
        >
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
