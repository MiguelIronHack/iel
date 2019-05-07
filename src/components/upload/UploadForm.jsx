import React, { Component } from "react";
import { getAllCourses, createCourse } from "../../api/apiHandler";
import "./form.css";

export default class uploadForm extends Component {
  state = {
    title: "",
    content: "",
    ref: "",
    image: null,
    category: null,
    categories: []
  };

  componentDidMount() {
    getAllCourses()
      .then(res => {
        this.setState({ category: res.data[0], categories: res.data });
      })
      .catch(err => console.error(err));
  }

  handleSubmit = e => {
    e.preventDefault();

    createCourse({
      title: this.state.title,
      content: this.state.content,
      image: this.state.image,
      category: this.state.category,
      ref: this.state.ref
    })
      .then(res => console.log(res.data))
      .catch(err => console.error(err));
  };

  handleInput = e => {
    console.log(e.target);
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  render() {
    const { handleSubmit, handleInput } = this;
    return (
      <section className="new-course-section">
        <form className="course-form" id="course-form" onSubmit={handleSubmit}>
          <label htmlFor="title">Title</label>
          <input onChange={handleInput} type="text" id="title" name="title" />
          <label htmlFor="content">Content</label>
          <input
            onChange={handleInput}
            type="text"
            id="content"
            name="content"
          />
          <label htmlFor="image">Image</label>
          <input onChange={handleInput} type="text" id="image" name="image" />
          <label htmlFor="category">Category</label>
          <input
            onChange={handleInput}
            type="text"
            id="category"
            name="category"
          />
          <label htmlFor="ref">Ref</label>
          <input onChange={handleInput} type="text" id="ref" name="ref" />
          <button className="button">Submit</button>
        </form>
      </section>
    );
  }
}
