import React, { Component } from "react";
import { getAllCourses, createCourse } from "../../api/coursesHandler";
import { createCategory, getAllCategories } from "../../api/categoryHandler";
import { uploadImage } from "../../services/imageUploadAPI";
import InputFile from "../InputFile";
import Dropdown from "../RealDropDown";
import DashboardNav from "../../pages/dashboard/components/DashboardNav";
import { Heading } from "react-bulma-components";
import { getLocalToken } from "../../api/ajaxLogin.js";
import { Redirect } from "react-router-dom";
import "./form.css";

export default class uploadForm extends Component {
  state = {
    title: "",
    description: "",
    video: "",
    image: "",
    category: [],
    categories: [],
    selectedCategory: [],
    submitted: false
  };

  componentDidMount() {
    getAllCategories()
      .then(res => {
        this.setState({
          categories: res.data
        });
      })
      .catch(err => console.error(err));
  }

  componentWillUnmount() {
    this.setState({ submitted: false });
  }

  handleImage = file => {
    this.setState({
      imgFileList: file,
      imageName: file[0].name
    });
  };

  onSubmit = e => {
    e.preventDefault();

    const userToken = getLocalToken();

    uploadImage(this.state.imgFileList).then(res => {
      console.log(res);
      this.setState({
        image: res.data.results[0].secure_url
      });
      createCourse({
        teacher: userToken._id,
        title: this.state.title,
        description: this.state.description,
        media: {
          video: this.state.video,
          image: this.state.image
        }
      })
        .then(res => {
          console.log("We go to the course page");
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
    });
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
    console.log(e.target.name);
  };

  onClick = () => {
    getAllCourses()
      .then(res => console.log(res.data))
      .catch(err => console.error(err));
    console.log(this.state.categories);
  };

  render() {
    if (this.state.submitted === true) {
      return <Redirect to="/coursemanagement" />;
    }
    const { onSubmit, onChange, onClick } = this;
    const { title, category, categories, description, video } = this.state;

    return (
      <React.Fragment>
        <DashboardNav />
        <section className="login-register-section">
          <Heading className="has-text-centered	">Upload Course</Heading>
          <form className="register-form box shadow" onSubmit={onSubmit}>
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

            <InputFile
              handleImage={this.handleImage}
              name={
                !this.state.imageName ? "upload image" : this.state.imageName
              }
            />

            <Dropdown
              handleSelect={onChange}
              key={title}
              data={categories}
              name="category"
              label="Category"
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
      </React.Fragment>
    );
  }
}
