import React from "react";
import { Heading } from "react-bulma-components";
import "./LessonDisplay.css";
import LessonNav from "./LessonNav";
import { getOneLesson } from "../../api/lessonHandler";
import { convertFromRaw, EditorConvertToHTML, EditorState } from "draft-js";
import draftToHtml from "draftjs-to-html";
import Lesson from "./Lesson";
import { getUser } from "../../api/userHandler";
import { getLocalToken } from "../../api/ajaxLogin";

export default class LessonDisplay extends React.Component {
  state = {
    lessons: [],
    currentLesson: {}
  };

  componentDidMount() {
    const user = getLocalToken();
    getUser(user._id)
      .then(({ data: user }) => {
        this.setState({
          lessons: user.lessons,
          currentLesson: user.lessons[0]
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    const { currentLesson, lessons } = this.state;
    if (!lessons.length) return <p>No lessons to display</p>;
    return (
      <React.Fragment>
        <LessonNav />
        <section className="lesson-display-section">
          <Heading className="lesson-header column">
            {currentLesson.title}
          </Heading>
          <article className="lesson box column is-three-quarters">
            <p className="lesson-description title">
              {currentLesson.description}
            </p>
            <div className="lesson-content">
              <Lesson lesson={currentLesson} />
            </div>
          </article>
        </section>
      </React.Fragment>
    );
  }
}
