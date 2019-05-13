import React, { Component } from "react";
import DashboardNav from "../components/DashboardNav";
import { getCourse, updateCourse } from "../../../api/coursesHandler";
import { getAllCategories } from "../../../api/categoryHandler";
import Input from "../../../components/Input";
import Dropdown from "../../../components/RealDropDown";
import InputFile from "../../../components/InputFile";

export default class CourseDetails extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      video: "",
      selectedCategory: {},
      categories: [],
      selectedLevel: "",
      levels: [
        {
          name: "Beginner"
        },
        {
          name: "Intermediate"
        },
        {
          name: "Advanced"
        }
      ]
    };
  }
  componentDidMount() {
    // remember this trick to get access to url info
    getCourse(this.props.match.params.course)
      .then(res => {
        console.log("course data", res.data);
        const course = { ...res.data };
        console.log(course);
        this.setState({
          course: course,
          selectedLevel: this.state.levels[0]
        });
      })
      .catch(err => console.error(err.response));

    getAllCategories().then(({ data }) => {
      this.setState({
        categories: data,
        selectedCategory: data[0]
      });

      console.log(this.state);
    });
  }

  handleChange = ({ currentTarget }) => {
    const key = currentTarget.name;
    const value = currentTarget.value;
    const course = { ...this.state.course };
    if (key === "video") {
      this.setState({ [key]: value });
      return;
    }
    course[key] = value;
    this.setState({ course: course });
  };

  handleSelectedCategory = data => {
    this.setState({ selectedCategory: data });
  };

  handleSelectedLevel = data => {
    this.setState({ selectedLevel: data });
  };

  submitEdition = e => {
    const { title, description } = this.state.course;
    const { selectedLevel, selectedCategory, video } = this.state;
    e.preventDefault();
    console.log(this.state);

    updateCourse(e.target.id, [
      {
        title: title,
        category: selectedCategory._id,
        level: selectedLevel,
        description: description,
        video: video
      }
    ])
      .then(res => console.log(res))
      .catch(err => console.error(err));
  };

  render() {
    const {
      course,
      video,
      categories,
      selectedCategory,
      levels,
      selectedLevel
    } = this.state;
    if (!course) return null;
    return (
      <React.Fragment>
        <DashboardNav rowId={course._id} />
        <form
          id={course._id}
          onSubmit={this.submitEdition}
          className="edit-course box"
        >
          <Input
            label="Title:"
            name="title"
            text={course.title}
            inputPlaceHolder="Edit field"
            handleChange={this.handleChange}
          />
          {/* dropdown */}
          <Dropdown
            currentItem={selectedCategory}
            handleSelect={this.handleSelectedCategory}
            data={categories}
          />

          <Dropdown
            currentItem={selectedLevel}
            handleSelect={this.handleSelectedLevel}
            data={levels}
          />

          <Input
            label="Description:"
            handleChange={this.handleChange}
            name="description"
            text={course.description}
            inputPlaceHolder="Edit field"
          />
          <h1>
            <InputFile />
          </h1>
          <Input
            label="Video:"
            handleChange={this.handleChange}
            name="video"
            text={video}
            inputPlaceHolder="Edit field"
          />

          <button className="button">submit edition</button>
        </form>
      </React.Fragment>
    );
  }
}
