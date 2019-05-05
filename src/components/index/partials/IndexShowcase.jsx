import React, { Component } from "react";
import "../index.css";
import { Heading } from "react-bulma-components";
import { Btn } from "../../partials/Btn";
import NextSection from "./components/NextSection";

export class IndexShowcase extends Component {
  render() {
    return (
      <section id="index-showcase" className="index-showcase">
        <Heading className="index-title has-text-dark">
          The more I read, the more I acquire, the more certain I am that I know
          nothing <em> - "Voltaire"</em>
          <br />
          <br />
          The writer, not the the metro stop
        </Heading>
        <Btn name="Join Us" />
        <NextSection className="next-section-btn" href="#index-banner" />
      </section>
    );
  }
}

export default IndexShowcase;
