import React, { Component } from "react";
import { getAllCourses, createCourse } from "../../api/coursesHandler";
import { Heading } from "react-bulma-components";
import "./form.css";

export default class uploadForm extends Component {
  state = {
    title: "",
    description: "",
    content: "",
    media: {
      video: "",
      image: ""
    }
  };

  onSubmit = e => {
    e.preventDefault();

    createCourse({
      title: this.state.title,
      description: this.state.description,
      content: this.state.content,
      media: {
        image: this.state.media.image
      }
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
  };

  render() {
    const { onSubmit, onChange } = this;
    const { title, description, content, media } = this.state;
    return (
      <section className="login-register-section">
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
            <label htmlFor="content">Content</label>
            <input
              value={content}
              onChange={onChange}
              className="input"
              placeholder="input your content here..."
              name="content"
              type="text"
            />
            <label htmlFor="image">Image</label>
            <input
              onChange={onChange}
              className="input"
              placeholder="input your image here..."
              name="image"
              type="input"
            />
          </div>
          <button className="button is-primary  is-focused">Submit</button>
        </form>
        <div>{this.state.title}</div>
        {/* <button onClick={this.onClick}>hi</button> */}
      </section>
    );
  }
}
