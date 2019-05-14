import React, { Component } from "react";
import Btn from "../../../components/Btn";
import { Heading, Section, Hero, Container } from "react-bulma-components/full";
import NextSection from "../components/NextSection";
import { getRandomCourse } from "../../../api/coursesHandler";

export class MostPop extends Component {
  state = {
    courses: []
  };

  componentDidMount() {
    getRandomCourse()
      .then(res => {
        console.log(res.data);
        this.setState({
          courses: res.data
        });
        console.log("testing state after taking data ", this.state.courses);
      })
      .catch(err => console.error(err.response));
  }

  render() {
    const { title, description } = this.state.courses;
    return (
      <Section id="pop-section" className="pop-section">
        <Hero className="pop-section-hero shadow">
          <Hero.Body>
            <Container>
              <Heading>{title}</Heading>
              <p className="pop-section-content">{description}</p>
            </Container>
          </Hero.Body>
        </Hero>

        <Btn to="/register" className="enroll-btn" name="Enroll" />
        <NextSection className="next-section-btn" href="#index-courses" />
      </Section>
    );
  }
}

export default MostPop;
