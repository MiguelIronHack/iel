import React from "react";
import { Heading } from "react-bulma-components";
import "./LessonDisplay.css";
import LessonNav from "./LessonNav";
import { getLessons } from "../../api/lessonHandler";
import { convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";

export default class LessonDisplay extends React.Component {
  state = {
    lessons: []
  };

  componentDidMount() {
    getLessons()
      .then(res => {
        console.log(res.data);

        this.setState({
          lessons: res.data
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    console.log(this.state.lessons, " lalala");

    return (
      <React.Fragment>
        <LessonNav />
        <section className="lesson-display-section">
          <Heading className="lesson-header column">{this.state.title}</Heading>
          <article className="lesson box column is-three-quarters">
            {this.state.lessons.map((lessons, index) => (
              // console.log(lessons.content.blocks[0].text)
              <p key={index}>
                {index} {lessons.content.blocks[0].text}
              </p>
            ))}
            {/* {lessons.map((lesson, index) => (
              <p key={index}>
                {index} {text}
              </p>
            ))} */}
            {/* <p className="lesson-description">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur
              porro illo velit optio consequuntur necessitatibus architecto in
              maiores, quod pariatur mollitia cupiditate, blanditiis dolores
              deleniti odio fugit ipsa cum, nam iste reprehenderit obcaecati
              dolorum repellat? Itaque voluptatum distinctio voluptates error
              illo unde perferendis rem earum sit doloremque, a porro ipsam!
            </p>
            <p className="lesson-content">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi
              vero ut dolorum laudantium nostrum, rerum aliquid quas nihil est,
              repellendus eum beatae doloribus sunt necessitatibus ab
              architecto? Eum, officia debitis. Quia ut dicta optio dignissimos
              architecto amet dolor tempora voluptates eveniet saepe distinctio,
              nihil eum voluptatibus natus harum blanditiis. Doloremque ratione
              natus at vel ullam! Vero alias beatae velit doloremque, amet nam,
              sapiente eum distinctio quaerat aut quis tempora iusto suscipit
              eius qui rerum, similique dignissimos minus cum! Vero officiis
              alias delectus quidem distinctio. Repellendus pariatur veritatis
              qui sequi, rem tempora consectetur sed nobis velit iusto,
              consequatur commodi ex consequuntur quibusdam ipsa magnam fugit!
              Quidem eum, odio quia labore nulla esse, voluptatibus laudantium
              neque itaque provident consequatur quis quod debitis, aliquid
              asperiores explicabo tempora error reprehenderit aspernatur
              delectus. Vero, quo! Laborum, laboriosam! Alias atque fugit
              debitis sequi quasi dolores consequatur voluptatum doloremque
              saepe impedit iusto eveniet iste, nihil quis omnis ad quisquam
              vero, harum nisi ullam inventore sit quas reiciendis. Aut minima
              iste laboriosam incidunt, quaerat exercitationem perferendis
              tempore est quae deleniti eaque cupiditate. Quidem, voluptate
              placeat. Dolor, dolorem cum voluptatibus amet autem impedit
              nostrum. Accusamus voluptatibus expedita, odit dolor eius quisquam
              explicabo debitis nam deleniti facilis suscipit, rem officia?
            </p> */}
          </article>
        </section>
      </React.Fragment>
    );
  }
}
