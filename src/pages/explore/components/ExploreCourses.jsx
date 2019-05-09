import React, { Component } from "react";
import { getAllCourses } from "../../../api/coursesHandler";

export default class ExploreCourses extends Component {
  state = {
    title: "title",
    description: [],
    rating: "3.5 / 5"
  };

  componentDidMount() {
    getAllCourses()
      .then(res => {
        res.data.map(e => {
          return this.setState({
            title: e.title,
            description: e.description
          });
        });
      })
      .catch(err => console.error(err));
  }

  render() {
    return (
      <div className="explore-card">
        <h1 className="title">{this.state.title}</h1>
        <div className="explore-courses">
          <div>{this.state.content}</div>
          <div>{this.state.rating}</div>
        </div>
      </div>
    );
  }
}
