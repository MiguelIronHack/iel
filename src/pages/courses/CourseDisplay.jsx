import React, { Component } from "react";
import { Progress, Heading } from "react-bulma-components";
import CourseTable from "../components/CourseTable";
import CourseSidePanel from "../components/CourseSidePanel";
import { Link } from "react-router-dom";
import { getCourse } from "../../api/coursesHandler";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressCard,
  faAddressBook,
  faBook
} from "@fortawesome/free-solid-svg-icons";

import "./course.css";

export default class Courses extends Component {
  state = {
    course: {}
  };

  componentDidMount() {
    getCourse(this.props.match.params.id)
      .then(res =>
        this.setState({
          course: res.data
        })
      )
      .catch(err => console.error(err));
  }

  render() {
    const { courseModules } = this.state.course;
    const { course } = this.state;
    if (!courseModules || !course) return null;
    return (
      <>
        <aside className="panel course-panel column shadow">
          <p className="panel-heading" />
          <Link to={`/thread/${course._id}`}>
            <label className="panel-block has-background-dark has-text-white aside-panel-text">
              <div className="aside-panel-text">View Comments</div>
              <span className="panel-icon aside-panel-icon">
                <FontAwesomeIcon icon={faBook} />
              </span>
            </label>
          </Link>
          {courseModules.map((mod, i) => (
            <a key={mod._id} href={`#${mod._id}`}>
              <label className="panel-block has-background-dark has-text-white aside-panel-text">
                {`Module ${i + 1}`}
                <span className="panel-icon aside-panel-icon">
                  <FontAwesomeIcon icon={faAddressCard} />
                </span>
              </label>
            </a>
          ))}

          <p className="panel-heading panel-footer" />
        </aside>

        <section className="course-section columns is-mobile">
          <div className="course-content column is-four-fifths">
            <Heading size={2}>{this.state.course.title}</Heading>
            <Progress max={100} value={25} color="success" id="progress" />
            {courseModules.map((mod, i) => (
              <div key={i} className="box course-box">
                <CourseTable mod={mod} index={i} />
              </div>
            ))}
          </div>
        </section>
      </>
    );
  }
}
