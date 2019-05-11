import React, { Component } from "react";
import { getAllCourses, createCourse } from "../../api/coursesHandler";
import { createCategory, getAllCategories } from "../../api/categoryHandler";
import { Heading } from "react-bulma-components";
import DashboardNav from "../../pages/dashboard/components/DashboardNav";

import { Redirect } from "react-router-dom";

import "./form.css";

export default class uploadForm extends Component {
  state = {
    title: "",
    description: "",
    video: "",
    image: "",
    category: [],
    submitted: false
  };

  componentWillUnmount() {
    this.setState({ submitted: false });
  }

  onSubmit = e => {
    e.preventDefault();

    createCourse({
      title: this.state.title,
      description: this.state.description,
      media: {
        video: this.state.video,
        image: this.state.image
      }
    })
      .then(res => {
        console.log("We go to course page");
        // <Redirect to="/coursemanagement" />;

        this.setState({ submitted: true });

        console.log(res.data);
      })
      .catch(err => console.error(err));

    createCategory({
      name: this.state.category
    })
      .then(res => console.log(res.data))
      .catch(err => console.error(err));
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onClick = () => {
    getAllCourses()
      .then(res => console.log(res.data))
      .catch(err => console.error(err));
    getAllCategories()
      .then(res => console.log(res.data))
      .catch(err => console.error(err));
  };

  render() {
    if (this.state.submitted === true) {
      return <Redirect to="/coursemanagement" />;
    }
    const { onSubmit, onChange, onClick } = this;
    const { title, category, description, image, video } = this.state;

    return (
      <section className="login-register-section">
        <DashboardNav />
        <Heading className="has-text-centered	">Upload Course</Heading>
        <form className="register-form box" onSubmit={onSubmit}>
          <div className="control">
            <label htmlFor="title">Title</label>
            <input
              value={title}
              onChange={onChange}
              className="input"
              placeholder="input your title here..."
              name="title"
              type="text"
            />
            <label htmlFor="description">Description</label>
            <input
              value={description}
              onChange={onChange}
              className="input"
              placeholder="input your description here..."
              name="description"
              type="text"
            />
            <label htmlFor="video">Video</label>
            <input
              value={video}
              onChange={onChange}
              className="input"
              placeholder="input your video link here..."
              name="video"
              type="input"
            />

            <label htmlFor="image">Image</label>
            <input
              value={image}
              onChange={onChange}
              className="input"
              placeholder="input your image link here..."
              name="image"
              type="input"
            />
          </div>

          <label htmlFor="category">Category</label>

          <input
            value={category}
            onChange={onChange}
            className="input"
            placeholder="input your category link here..."
            name="category"
            type="category"
          />

          <button
            className="button is-primary  is-focused"
            onClick={this.onClick}
          >
            Submit
          </button>
        </form>
        <button onClick={onClick} className="button">
          get courses and categories
        </button>
      </section>
    );
  }
}
