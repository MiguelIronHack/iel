import React, { Component } from "react";
import "./explore.css";
import ExploreCourses from "./components/ExploreCourses";

export default class Explore extends Component {
  state = {
    rating: "4.5 / 5"
  };

  render() {
    return (
      <section className="explore-section">
        <ExploreCourses />
      </section>
    );
  }
}
