import React, { Component } from "react";
// eslint-disable-next-line
import { Switch, Route } from "react-router-dom";
import IndexShowcase from "./partials/IndexShowcase";
import Banner from "./partials/IndexBanner";
import Pop from "./partials/IndexMostPop";
import Courses from "./partials/IndexCourses";
import IndexFooter from "./partials/Footer";

export class Index extends Component {
  render() {
    return (
      <main className="main">
        <IndexShowcase />
        <Banner />
        <Pop />
        <Courses />
        <IndexFooter />
      </main>
    );
  }
}

export default Index;
