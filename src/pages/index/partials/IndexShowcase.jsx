import React, { Component } from "react";
import "../index.css";
import { Heading } from "react-bulma-components";
import { Btn } from "../../../components/Btn";
import NextSection from "../components/NextSection";
import { Redirect } from "react-router-dom";

export class IndexShowcase extends Component {
  state = {
    isSubmited: false
  };

  handleRedirect = e => {
    console.log(this.props);
    this.setState({ isSubmited: true });
    // this.props.history.push("/");
  };

  componentWillUnmount() {
    this.setState({ isSubmited: false });
  }

  render() {
    if (this.state.isSubmited == true) {
      console.log(" redirecting");

      return <Redirect to="/register" />;
    }

    return (
      <section id="index-showcase" className="index-showcase">
        <Heading className="index-title has-text-dark">
          The more I read, the more I acquire, the more certain I am that I know
          nothing <em> - "Voltaire"</em>
          <br />
          <br />
          The writer, not the the metro stop
        </Heading>
        <Btn name="Join Us" toPage="register" />
        <NextSection className="next-section-btn" href="#index-banner" />
      </section>
    );
  }
}

export default IndexShowcase;
