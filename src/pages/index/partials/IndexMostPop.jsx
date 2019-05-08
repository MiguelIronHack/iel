import React, { Component } from "react";
import Btn from "../../../components/Btn";
import { Heading, Section, Hero, Container } from "react-bulma-components/full";
import NextSection from "../components/NextSection";

export class MostPop extends Component {
  render() {
    return (
      <Section id="pop-section" className="pop-section">
        <Hero color="primary">
          <Hero.Body>
            <Container>
              <Heading>Hero title Primary</Heading>
              <Heading subtitle size={4}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Exercitationem voluptates quaerat beatae doloremque minima
                reiciendis modi rem earum, accusantium ipsum delectus,
                necessitatibus ipsa in recusandae alias voluptate, expedita
                libero! Rerum?
              </Heading>
            </Container>
          </Hero.Body>
        </Hero>

        <Btn className="enroll-btn" name="Enroll" />
        <NextSection className="next-section-btn" href="#index-courses" />
      </Section>
    );
  }
}

export default MostPop;
