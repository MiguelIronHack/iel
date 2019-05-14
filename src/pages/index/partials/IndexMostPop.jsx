import React, { Component } from "react";
import Btn from "../../../components/Btn";
import { Heading, Section, Hero, Container } from "react-bulma-components/full";
import NextSection from "../components/NextSection";

export class MostPop extends Component {
  render() {
    return (
      <Section id="pop-section" className="pop-section">
        <Hero className="pop-section-hero">
          <Hero.Body>
            <Container>
              <Heading>Hero title Primary</Heading>
              <p className="pop-section-content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Exercitationem voluptates quaerat beatae doloremque minima
                reiciendis modi rem earum, accusantium ipsum delectus,
                necessitatibus ipsa in recusandae alias voluptate, expedita
                libero! Rerum?
              </p>
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
