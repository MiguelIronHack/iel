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
    lessons: []
  };

  componentDidMount() {
    const user = getLocalToken();
    getUser(user._id)
      .then(({ data: user }) => {
        this.setState({ lessons: user.lessons });
      })
      .catch(err => console.log(err));
  }

  render() {
    if (!this.state.lessons) return <p>No lessons to display</p>;
    // return this.state.lessons.map(lesson => (
    //   <Lesson key={lesson._id} lesson={lesson} />
    // ));
    return (
      <React.Fragment>
        <LessonNav />
        <section className="lesson-display-section">
          <Heading className="lesson-header column">{this.state.title}</Heading>
          <article className="lesson box column is-three-quarters">
            <p className="lesson-description">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur
              porro illo velit optio consequuntur necessitatibus architecto in
              maiores, quod pariatur mollitia cupiditate, blanditiis dolores
              deleniti odio fugit ipsa cum, nam iste reprehenderit obcaecati
              dolorum repellat? Itaque voluptatum distinctio voluptates error
              illo unde perferendis rem earum sit doloremque, a porro ipsam!
            </p>
            <p className="lesson-content">
              <Lesson lesson={this.state.lessons[0]} />
            </p>
          </article>
        </section>
      </React.Fragment>
    );
  }
}
