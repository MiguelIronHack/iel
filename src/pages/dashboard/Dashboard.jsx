import React, { Component } from "react";
import UploadForm from "../../components/upload/UploadForm";
import Courses from "../index/partials/IndexCourses";

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
