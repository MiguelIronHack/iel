import React, { Component } from "react";
import { getAllCourses, createCourse } from "../../api/coursesHandler";
import { Heading } from "react-bulma-components";
import "./form.css";
import { createCategory, getAllCategories } from "../../api/categoryHandler";

export default class uploadForm extends Component {
  state = {
    title: "",
    description: "",
    video: "",
    image: "",
    category: ""
  };

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
      .then(res => console.log(res.data))
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
    console.log(this.state.category);
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
    const { onSubmit, onChange, onClick } = this;
    const { title, category, description, image, video } = this.state;

    return (
      <section className="login-register-section">
        <Heading className="has-text-centered	">Upload Course</Heading>
        <form className="register-form box" onSubmit={onSubmit}>
          <button onClick={onClick}>the button</button>
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
            <label htmlFor="category">Category</label>
            <div
              className="  is-fullwidth"
              placeholder="input your category link here..."
              name="category"
              type="input"
            >
              <select
                className="control select"
                value={category}
                onChange={onChange}
              >
                <option>Programming</option>
                <option>Music</option>
                <option>Other</option>
              </select>
            </div>

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
          <button className="button is-primary  is-focused">Submit</button>
        </form>
        <div>{this.state.title}</div>
      </section>
    );
  }
}
