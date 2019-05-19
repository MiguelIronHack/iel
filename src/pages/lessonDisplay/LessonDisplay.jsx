import React from "react";
import { Heading } from "react-bulma-components";
import "./LessonDisplay.css";
import LessonNav from "./LessonNav";
import Lesson from "./Lesson";
import { getUser } from "../../api/userHandler";
import { getLocalToken } from "../../api/ajaxLogin";
import { getOneLesson, getLessons } from "../../api/lessonHandler";
import { getModule } from "../../api/moduleHandler";

export default class LessonDisplay extends React.Component {
  state = {
    lessons: [],
    currentLesson: {},
    currentPage: 0
  };

  componentDidMount() {
    // const user = getLocalToken();
    // getUser(user._id)
    //   .then(({ data: user }) => {
    //     this.setState({
    //       lessons: user.lessons,
    //       currentLesson: user.lessons[0]
    //     });
    //   })
    //   .catch(err => console.log(err));
    // getLessons()
    getModule(this.props.match.params.id)
      .then(res =>
        this.setState({
          lessons: res.data.lessons,
          currentLesson: res.data.lessons[0]
        })
      )
      .catch(err => console.error(err));
  }

  handlePage = direction => {
    direction === "right"
      ? this.setState({ currentPage: this.state.currentPage + 1 })
      : this.setState({ currentPage: this.state.currentPage - 1 });
  };

  render() {
    console.log(this.props);
    const { lessons, currentPage } = this.state;

    if (!lessons.length) return <p className="title">No lessons to display</p>;
    return (
      <React.Fragment>
        <LessonNav
          max={lessons.length}
          currentPage={currentPage}
          handlePage={this.handlePage}
          title={lessons[currentPage].title}
        />
        <section className="lesson-display-section">
          <Heading>{lessons[currentPage].title}</Heading>

          <article className="lesson box column is-three-quarters">
            <p className="lesson-description">
              {lessons[currentPage].description}
            </p>
            <div className="lesson-content">
              <Lesson lesson={lessons[currentPage]} />
            </div>
          </article>
        </section>
      </React.Fragment>
    );
  }
}
