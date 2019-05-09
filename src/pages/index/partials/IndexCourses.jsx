import React, { Component } from "react";
import { getAllCourses } from "../../../api/coursesHandler";
import Course from "../components/Course";
import Btn from "../../../components/Btn";
import { Heading, Columns } from "react-bulma-components";
import { Redirect } from "react-router-dom";

export class IndexCourses extends Component {
  state = {
    title: "title",
    description: [],
    image: "img",
    date: [],
    isSubmited: false
  };

  componentDidMount() {
    getAllCourses()
      .then(res => {
        res.data.map(e => {
          return this.setState({
            title: e.title,
            description: e.description,
            image: e.image,
            date: e.date
          });
        });
      })
      .catch(err => console.error(err));
  }

  handleRedirect = e => {
    this.setState({ isSubmited: true });
  };

  render() {
    if (this.state.isSubmited == true) {
      console.log(" redirecting");
      return <Redirect to="/explore" />;
    }

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
        <Btn
          className="mb"
          name="Explore Our Courses"
          onClick={this.handleRedirect}
        />
      </section>
    );
  }
}

export default IndexCourses;
