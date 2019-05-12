import React, { Component } from "react";
import List from "../../components/List";
import ModuleList from "./ModuleList";
import CourseList from "./CourseList";
import LessonList from "./LessonList";

class BuildCourse extends Component {
  state = {
    selectedCourse: "H",
    courses: [
      {
        id: 1,
        title: "Master React",
        description: "Short Description Lorem ipsum"
      },
      {
        id: 2,
        title: "Master React",
        description: "Short Description Lorem ipsum"
      },
      {
        id: 3,
        title: "Master React",
        description: "Short Description Lorem ipsum"
      },
      {
        id: 4,
        title: "Master React",
        description: "Short Description Lorem ipsum"
      }
    ]
  };

  handleClick = e => console.log(e);

  render() {
    return (
      <React.Fragment>
        <div className="container columns is-12" />
        <h1>Select a course to build !</h1>
        {this.state.selectedCourse ? (
          <div className="column is-8">
            <div className="column is-4">
              <List data={this.state.courses} />
            </div>
            <div className="column is-4">
              <List data={} />
            </div>
          </div>
        ) : (
          <div className="column is-6">
            <List handleClick={this.handleClick} data={this.state.courses} />;
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default BuildCourse;
