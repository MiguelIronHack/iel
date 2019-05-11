import React, { Component } from "react";
import DashboardNav from "../components/DashboardNav";
import { getCourse } from "../../../api/coursesHandler";

export default class CourseDetails extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      course: {}
    };
  }
  componentDidMount() {
    // remember this tricks to get access to url infos
    getCourse(this.props.match.params.course)
      .then(res => {
        console.log(res.data, " datos del curso");
        this.setState({ course: res.data });
      })
      .catch(err => console.error(err.response));
  }
  render() {
    const { course } = this.state;
    return (
      <React.Fragment>
        <DashboardNav />
        <h1>Edit Course</h1>
        <h1 className="title">{course.title}</h1>
        <p>price : {course.description} &euro;</p>
      </React.Fragment>
    );
  }
}
