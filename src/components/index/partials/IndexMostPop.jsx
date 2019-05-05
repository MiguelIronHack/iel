import React, { Component } from "react";
import Btn from "../../partials/Btn";
import { Heading, Section, Hero, Container } from "react-bulma-components/full";

export class MostPop extends Component {
  render() {
    return (
      <Section id="pop-section" className="pop-section bb">
        <Hero color="primary br mb">
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
      </Section>
    );
  }
}

export default MostPop;
