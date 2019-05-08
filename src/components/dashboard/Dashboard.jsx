import React, { Component } from "react";
import UploadForm from "../upload/UploadForm";
import Courses from "../../pages/index/partials/IndexCourses";

export default class Dashboard extends Component {
  render() {
    return (
      <React.Fragment>
        <UploadForm />
        <Courses />
      </React.Fragment>
    );
  }
}
