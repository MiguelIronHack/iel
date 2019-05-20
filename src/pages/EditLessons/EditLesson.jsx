import React, { Component } from "react";
import LessonEditor from "./LessonEditor";
import LessonList from "./LessonList";
import SidePanel from "./../components/CourseSidePanel";
import { faPlus, faSignInAlt } from "@fortawesome/free-solid-svg-icons";
class EditLesson extends Component {
  state = {
    isEditing: false,
    selectedLesson: {},
    lessons: [],
    courseModules: []
  };

  componentDidMount() {
    window.onpopstate = e => {
      this.setState({ isEditing: false });
      //   this.props.history.push("/edit-lesson");
    };
  }

  onBackButtonEvent = e => {
    this.props.history.replace("/edit-lesson");
  };
  startEdit = selectedLesson => {
    this.setState({ isEditing: true, selectedLesson });
  };

  render() {
    const { selectedLesson, isEditing } = this.state;
    if (isEditing)
      return (
        <LessonEditor history={this.props.history} lesson={selectedLesson} />
      );
    return (
      <>
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
          courseModules={this.state.courseModules}
        />
        <LessonList handleClick={this.startEdit} />;
      </>
    );
  }
}

export default EditLesson;
