import React, { Component } from "react";
import DashboardNav from "../components/DashboardNav";
import { getCourse, updateCourse } from "../../../api/coursesHandler";
import { getAllCategories } from "../../../api/categoryHandler";
import Input from "../../../components/Input";
import Dropdown from "../../../components/RealDropDown";
import InputFile from "../../../components/InputFile";
import { uploadImage } from "../../../services/imageUploadAPI";

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

  handleImage = file => {
    this.setState({
      imgFileList: file
    });
  };

  submitEdition = e => {
    e.preventDefault();
    const { title, description } = this.state.course;
    const { selectedLevel, selectedCategory, video, image } = this.state;

    if (!this.state.imgFileList) {
      updateCourse(this.props.match.params.course, {
        title: title,
        category: selectedCategory._id,
        level: selectedLevel.name,
        description: description,
        media: {
          video: video
        }
      })
        .then(res => console.log(res))
        .catch(err => console.error(err));
    } else {
      uploadImage(this.state.imgFileList)
        .then(res => {
          this.setState({ image: res.data.results[0].secure_url });

          updateCourse(this.props.match.params.course, {
            title: title,
            category: selectedCategory._id,
            level: selectedLevel.name,
            description: description,
            media: {
              video: video,
              image: image
            }
          })
            .then(res => console.log(res))
            .catch(err => console.error(err));
        })
        .catch(err => console.error(err));
    }
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
      <section className="edit-course-section has-background-dark">
        <DashboardNav rowId={course._id} />
        <form
          id={course._id}
          onSubmit={this.submitEdition}
          className="edit-course box has-background-grey-dark"
        >
          <Input
            label="Title:"
            name="title"
            text={course.title}
            inputPlaceHolder="Edit field"
            handleChange={this.handleChange}
          />
          <Input
            label="Description:"
            handleChange={this.handleChange}
            name="description"
            text={course.description}
            inputPlaceHolder="Edit field"
          />

          <Input
            label="Video:"
            handleChange={this.handleChange}
            name="video"
            text={video}
            inputPlaceHolder="Edit field"
          />

          <Dropdown
            label="Category:"
            currentItem={selectedCategory}
            handleSelect={this.handleSelectedCategory}
            data={categories}
          />

          <Dropdown
            label="difficulty:"
            id="level"
            currentItem={selectedLevel}
            handleSelect={this.handleSelectedLevel}
            data={levels}
          />

          <InputFile handleImage={this.handleImage} />
          <button className="button">submit edition</button>
        </form>
      </section>
    );
  }
}
