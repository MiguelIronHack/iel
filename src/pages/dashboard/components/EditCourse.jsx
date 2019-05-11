import React, { Component } from "react";
import { Heading } from "react-bulma-components";
import DashboardNav from "../components/DashboardNav";
import "./dashboardComponents.css";

export default class uploadForm extends Component {
  state = {
    title: "",
    description: "",
    video: "",
    image: "",
    category: [],
    submited: false
  };

  componentWillUnmount() {}

  onSubmit = e => {
    e.preventDefault();
  };

  onChange = e => {
    // this.setState({
    //   [e.target.name]: e.target.value
    // });
    // console.log(e.target.value);
  };

  render() {
    const { onSubmit, onChange } = this;
    const { title, category, description, image, video } = this.state;

    return (
      <section className="login-register-section">
        <DashboardNav />
        <Heading className="has-text-centered	">Edit Course</Heading>
      </section>
    );
  }
}
