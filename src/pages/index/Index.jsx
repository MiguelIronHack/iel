import React, { Component } from "react";
// eslint-disable-next-line
import IndexShowcase from "./partials/IndexShowcase";
import Banner from "./partials/IndexBanner";
import Pop from "./partials/IndexMostPop";
import Courses from "./partials/IndexCourses";

export class Index extends Component {
  render() {
    return (
      <main className="main">
        <IndexShowcase />
        <Banner />
        <Pop />
        <Courses />
      </main>
    );
  }
}

export default Index;
