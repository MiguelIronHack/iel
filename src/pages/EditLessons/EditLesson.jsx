import React, { Component } from "react";
import LessonEditor from "./LessonEditor";
import LessonList from "./LessonList";

class EditLesson extends Component {
  state = {
    isEditing: false,
    selectedLesson: {},
    lessons: []
  };

  startEdit = selectedLesson => {
    this.setState({ isEditing: true, selectedLesson });
  };

  render() {
    const { selectedLesson, isEditing } = this.state;
    if (isEditing) return <LessonEditor lesson={selectedLesson} />;
    return <LessonList handleClick={this.startEdit} />;
  }
}

export default EditLesson;
