import React, { Component } from "react";
import { getAllCourses } from "../../../api/coursesHandler";
import Course from "./components/Course";
import Btn from "../../partials/Btn";
import { Heading, Columns } from "react-bulma-components";

export class IndexCourses extends Component {
  state = {
    title: "title",
    description: [],
    image: "img",
    date: []
  };

  componentDidMount() {
    getAllCourses()
      .then(res => {
        res.data.map(e => {
          this.setState({
            title: e.title,
            description: e.description,
            image: e.image,
            date: e.date
          });
          console.log(e.date);
          console.log(this.state.date);
        });
      })
      .catch(err => console.error(err));
  }

  render() {
    return (
      <section className="index-courses m-p" id="index-courses">
        <Heading>Title</Heading>
        <Columns>
          <Columns.Column size={3}>
            <Course
              className="course-link"
              title={this.state.title}
              description={this.state.description}
              content={this.state.content}
              image={this.state.image}
              // date={this.state.date}
            />
          </Columns.Column>
        </Columns>
        <Btn className="mb" name="Explore Our Courses" />
      </section>
    );
  }
}

export default IndexCourses;
