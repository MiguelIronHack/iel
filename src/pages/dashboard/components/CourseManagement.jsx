import React, { Component } from "react";
import DashboardNav from "./DashboardNav";
import {
  getAllCourses,
  deleteCourse,
  getUserCourses
} from "../../../api/coursesHandler";
import "./dashboardComponents.css";
import Btn from "../../../components/Btn";
import { Link } from "react-router-dom";
import { getLocalToken } from "./../../../api/ajaxLogin";
import SidePanel from "../../components/CourseSidePanel";
import { faPlus, faSignInAlt } from "@fortawesome/free-solid-svg-icons";
export default class UsersList extends Component {
  state = { courses: [] };

  componentDidMount() {
    // this is the display board function

    getUserCourses(getLocalToken()._id)
      .then(res => {
        this.setState({ courses: res.data });
      })
      .catch(err => console.log(err.response));
  }

  handleDelete = e => {
    const target = e.target.parentElement.parentElement;
    target.remove(); // removing the course row from the front end

    deleteCourse(target.id)
      .then(console.log("Course removed"), console.log(target.id))
      .catch(err => console.error(err));
  };

  render() {
    const { courses } = this.state;

    return (
      <section className="course-management-section">
        <SidePanel
          firstNavItem="My Courses"
          firstNavItemIcon={faSignInAlt}
          firstNavItemLink="/profile"
          secondNavItem="Build Course"
          secondNavItemIcon={faPlus}
          secondNavItemLink="/build-course"
          thirdNavItem="Create Lessons"
          thirdNavItemIcon={faPlus}
          thirdNavItemLink="/create/lesson"
          fourthNavItem="Create Course"
          fourthNavItemIcon={faPlus}
          fourthNavItemLink="/create-course"
          fifthNavItem="Edit Lessons"
          fifthNavItemIcon={faPlus}
          fifthNavItemLink="/edit-lesson"
          sixthNavItem="Manage Courses"
          sixthNavItemIcon={faPlus}
          sixthNavItemLink="/coursemanagement"
          courseModules={this.state.courseModules || []}
        />
        <table className="table shadow">
          <thead className="thead">
            <tr className="tr">
              <th className="th">Title</th>
              <th className="th">Description</th>
              <th className="th">Date</th>
              <th className="th">Edit</th>
              <th className="th">Delete</th>
            </tr>
          </thead>
          <tbody className="tbody">
            {courses.map((course, index) => (
              <tr id={course._id} className="tr" key={index}>
                <td className="td">{course.title}</td>
                <td className="td">{course.description}</td>
                <td className="td">{course.date}</td>

                <td className="td edit-course">
                  <Link to={`/edit-course/${course._id}`}>
                    <i
                      data-id={course._id}
                      // onClick={this.handleModify}
                      className="fas fa-edit"
                    />
                  </Link>
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
        <span className="btn-create-course">
          <Btn name="Create New Course" toPage="create-course" />
        </span>
      </section>
    );
  }
}
