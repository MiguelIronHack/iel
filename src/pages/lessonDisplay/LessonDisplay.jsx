import React from "react";
import { Heading } from "react-bulma-components";
import "./LessonDisplay.css";
import LessonNav from "./LessonNav";
import Lesson from "./Lesson";
import { getUser } from "../../api/userHandler";
import { getLocalToken } from "../../api/ajaxLogin";

export default class LessonDisplay extends React.Component {
  state = {
    lessons: [],
    currentLesson: {},
    currentPage: 0
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

  handlePage = page => {
    console.log(page);
  };

  render() {
    const { currentLesson, lessons, currentPage } = this.state;
    if (!lessons.length) return <p className="title">No lessons to display</p>;
    return (
      <React.Fragment>
        <LessonNav
          handlePage={this.handlePage}
          currentPage={currentPage}
          title={currentLesson.title}
        />
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
