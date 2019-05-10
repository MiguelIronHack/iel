import React, { Component } from "react";
import DashboardNav from "./DashboardNav";
import { getAllCourses, deleteCourse } from "../../../api/coursesHandler";
import "./dashboardComponents.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faUserTimes } from "@fortawesome/free-solid-svg-icons";
// import { faUserEdit } from "@fortawesome/free-solid-svg-icons";

export default class UsersList extends Component {
  state = { courses: [] };

  componentDidMount() {
    this.displayBoard();
  }

  displayBoard() {
    getAllCourses()
      .then(res => {
        this.setState({ courses: res.data });
      })
      .catch(err => console.error(err.response));
  }

  // handleModify = e => {
  //   const id = e.target.getAttribute("data-id");
  //   console.log("this is the user ID to MODIFY: ", id);
  // };

  handleDelete = e => {
    const id = e.target.getAttribute("data-id");
    console.log("this is the user ID to DELETE: ", id);

    deleteCourse(id)
      .then(res => {
        this.displayBoard();
      })
      .catch(err => console.error(err.response, "What's!"));
  };

  render() {
    const { courses } = this.state;
    console.log(courses);
    return (
      <React.Fragment>
        <DashboardNav />
        <table className="table">
          <thead className="thead">
            <tr className="tr">
              <th className="th">Title</th>
              <th className="th">description</th>
              <th className="th">submitted</th>
              <th className="th">Edit</th>
              <th className="th">Delete</th>
            </tr>
          </thead>
          <tbody className="tbody">
            {courses.map((course, index) => (
              <tr className="tr" key={index}>
                <td className="td">{course.title}</td>
                <td className="td">{course.description}</td>
                <td className="td">{course.submitted}</td>
                <td className="td edit-course">
                  <i
                    data-id={course._id}
                    // onClick={this.handleModify}
                    className="fas fa-edit"
                  />
                </td>
                <td className="td delete-course">
                  <i
                    data-id={course._id}
                    onClick={this.handleDelete}
                    className="fas fa-eraser"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}
