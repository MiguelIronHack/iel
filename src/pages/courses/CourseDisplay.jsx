import React, { Component } from "react";
import { Progress, Heading } from "react-bulma-components";
import CourseTable from "../components/CourseTable";
import CourseSidePanel from "../components/CourseSidePanel";
import { getCourse } from "../../api/coursesHandler";
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
    if (!courseModules) return null;
    return (
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
    );
  }
}
