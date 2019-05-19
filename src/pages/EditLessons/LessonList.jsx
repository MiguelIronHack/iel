import React, { Component } from "react";
import List from "../../components/List";
import Dropdown from "../../components/RealDropDown";
import { getLessons } from "../../api/lessonHandler";
import { getLocalToken } from "../../api/ajaxLogin";
import { getAllTags } from "../../api/tagHandler";
import "./editLesson.css";

class LessonList extends Component {
  state = { lessons: [] };

  componentDidMount() {
    getAllTags()
      .then(({ data }) => {
        const generalTag = { name: "All", _id: "" };
        this.setState({
          tags: [generalTag, ...data],
          selectedTag: generalTag
        });
      })
      .catch(err => console.log("There was an error with the db", err));

    getLessons(getLocalToken._id)
      .then(({ data: lessons }) => {
        this.setState({ lessons });
      })
      .catch(err => console.log(err));
  }

  handleSelect = selectedTag => {
    this.setState({ selectedTag });
  };

  render() {
    const { tags, selectedTag, lessons } = this.state;
    const filteredLessons =
      selectedTag && selectedTag._id
        ? lessons.filter(lesson => lesson.tags._id === selectedTag._id)
        : lessons;

    return (
      <>
        <section className="lesson-list">
          <div>
            <h1>Select a lesson you want to Edit</h1>
            <p>Filter by tag</p>
            <Dropdown
              name="tag"
              handleSelect={this.handleSelect}
              currentItem={selectedTag}
              data={tags}
            />
          </div>
          <List data={filteredLessons} handleClick={this.props.handleClick} />;
        </section>
      </>
    );
  }
}

export default LessonList;
