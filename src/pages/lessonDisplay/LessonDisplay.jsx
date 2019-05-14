import React from "react";
import { Heading } from "react-bulma-components";
import "./LessonDisplay.css";
import LessonNav from "./LessonNav";
import { getLessons, getOneLesson } from "../../api/lessonHandler";
import { convertFromRaw, EditorConvertToHTML, EditorState } from "draft-js";
import draftToHtml from "draftjs-to-html";
import Lesson from "./Lesson";

export default class LessonDisplay extends React.Component {
  state = {
    lessons: []
  };

  componentDidMount() {
    getLessons()
      .then(res => {
        this.setState({ lessons: res.data });
      })
      .catch(err => console.log(err));

    // const test = convertFromRaw(res.data.content);
    // console.log(test);
    // this.setState({ contentState: res.data.content });
    // getLessons()
    //   .then(res => {
    //     console.log(res.data);
    //     this.setState({
    //       lessons: res.data
    //     });
    //   })
    //   .catch(err => console.log(err));
    // console.log("here");
    // getOneLesson("5cd9c791c3480a3c1085cb8c")
    //   .then(res => console.log(res))
    //   .catch(err => console.log(err));
  }

  render() {
    if (!this.state.lessons) return <p>No lessons to display</p>;
    return this.state.lessons.map(lesson => (
      <Lesson key={lesson._id} lesson={lesson} />
    ));
    // <React.Fragment>
    //   <LessonNav />
    //   <section className="lesson-display-section">
    //     <Heading className="lesson-header column">{this.state.title}</Heading>
    //     <article className="lesson box column is-three-quarters">
    //       <p key={this.state.lesson._id}>
    //         {10} {this.state.lesson.content.blocks[0].text}
    //       </p>

    // {/* {lessons.map((lesson, index) => (
    //   <p key={index}>
    //     {index} {text}
    //   </p>
    // ))} */}
    // {/* <p className="lesson-description">
    //   Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur
    //   porro illo velit optio consequuntur necessitatibus architecto in
    //   maiores, quod pariatur mollitia cupiditate, blanditiis dolores
    //   deleniti odio fugit ipsa cum, nam iste reprehenderit obcaecati
    //   dolorum repellat? Itaque voluptatum distinctio voluptates error
    //   illo unde perferendis rem earum sit doloremque, a porro ipsam!
    // </p>
    // <p className="lesson-content">
    //   Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi
    //   vero ut dolorum laudantium nostrum, rerum aliquid quas nihil est,
    //   repellendus eum beatae doloribus sunt necessitatibus ab
    //   architecto? Eum, officia debitis. Quia ut dicta optio dignissimos
    //   architecto amet dolor tempora voluptates eveniet saepe distinctio,
    //   nihil eum voluptatibus natus harum blanditiis. Doloremque ratione
    //   natus at vel ullam! Vero alias beatae velit doloremque, amet nam,
    //   sapiente eum distinctio quaerat aut quis tempora iusto suscipit
    //   eius qui rerum, similique dignissimos minus cum! Vero officiis
    //   alias delectus quidem distinctio. Repellendus pariatur veritatis
    //   qui sequi, rem tempora consectetur sed nobis velit iusto,
    //   consequatur commodi ex consequuntur quibusdam ipsa magnam fugit!
    //   Quidem eum, odio quia labore nulla esse, voluptatibus laudantium
    //   neque itaque provident consequatur quis quod debitis, aliquid
    //   asperiores explicabo tempora error reprehenderit aspernatur
    //   delectus. Vero, quo! Laborum, laboriosam! Alias atque fugit
    //   debitis sequi quasi dolores consequatur voluptatum doloremque
    //   saepe impedit iusto eveniet iste, nihil quis omnis ad quisquam
    //   vero, harum nisi ullam inventore sit quas reiciendis. Aut minima
    //   iste laboriosam incidunt, quaerat exercitationem perferendis
    //   tempore est quae deleniti eaque cupiditate. Quidem, voluptate
    //   placeat. Dolor, dolorem cum voluptatibus amet autem impedit
    //   nostrum. Accusamus voluptatibus expedita, odit dolor eius quisquam
    //   explicabo debitis nam deleniti facilis suscipit, rem officia?
    // </p> */}
    //     </article>
    //   </section>
    // </React.Fragment>
  }
}
