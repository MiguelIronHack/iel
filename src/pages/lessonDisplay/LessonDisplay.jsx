import React from "react";
import "./LessonDisplay.css";
import LessonNav from "./LessonNav";
import Lesson from "./Lesson";
import { getModule } from "../../api/moduleHandler";

export default class LessonDisplay extends React.Component {
  state = {
    lessons: [],
    currentLesson: {},
    currentPage: 0
  };

  componentDidMount() {
    getModule(this.props.match.params.id)
      .then(res =>
        this.setState({
          lessons: res.data.lessons,
          currentLesson: res.data.lessons[0],
          currentPage: this.props.location.state.currentPage
        })
      )
      .catch(err => console.error(err));
  }

  handlePage = direction => {
    const currentPage = this.state.currentPage;
    const max = this.state.lessons.length;
    if (direction === "right" && currentPage + 1 >= max) {
      this.setState({ currentPage: currentPage });
      this.props.history.goBack();
      return;
    }
    if (direction === "left" && currentPage - 1 < 0) {
      this.setState({ currentPage: currentPage });
      this.props.history.goBack();
      return;
    }
    if (direction === "right") this.setState({ currentPage: currentPage + 1 });
    if (direction === "left") this.setState({ currentPage: currentPage - 1 });
  };

  render() {
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
