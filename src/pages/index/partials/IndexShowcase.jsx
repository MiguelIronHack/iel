import React, { Component } from "react";
import "../index.css";
import { Heading } from "react-bulma-components";
import { Btn } from "../../../components/Btn";
import NextSection from "../components/NextSection";
// import { Redirect } from "react-router-dom";

export class IndexShowcase extends Component {
  render() {
    return (
      <section id="index-showcase" className="index-showcase">
        <Heading className="index-title has-text-dark">
          The more I read, the more I acquire, the more certain I am that I know
          nothing <em> - "Voltaire"</em>
        </Heading>
        <Btn name="Join Us" toPage="register" />
        <NextSection className="next-section-btn" href="#index-banner" />
      </section>
    );
  }
}

export default IndexShowcase;
