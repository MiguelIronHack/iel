import React, { Component } from "react";
// import UploadForm from "../../components/upload/UploadForm";
// import Courses from "../index/partials/IndexCourses";
import DashboardNav from "./components/DashboardNav";

export default class Dashboard extends Component {
  render() {
    return (
      <React.Fragment>
        <DashboardNav />
        {/* <UploadForm />
        <Courses /> */}
      </React.Fragment>
    );
  }
}
