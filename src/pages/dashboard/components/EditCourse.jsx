import React, { Component } from "react";
import DashboardNav from "../components/DashboardNav";
import { getCourse, updateCourse } from "../../../api/coursesHandler";
import Input from "../../../components/Input";

export default class CourseDetails extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {};
  }
  componentDidMount() {
    // remember this trick to get access to url info
    getCourse(this.props.match.params.course)
      .then(res => {
        console.log("course data", res.data);
        this.setState({
          course: res.data,
          image: res.data.media.image,
          video: res.data.media.video
        });
      })
      .catch(err => console.error(err.response));
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
  // onChange = e => {
  //   this.setState({
  //     course: {
  //       [e.target.name]: e.target.innerHTML
  //     }
  //   });
  // };

  // onClick = e => {
  //   e.preventDefault();
  //   const target = e.target.parentElement.childNodes[1];
  //   target.contentEditable = "true";
  //   console.log(target.innerHTML);
  //   this.setState({
  //     course: {
  //       [e.target.name]: e.target.innerHTML
  //     }
  //   });
  // };

  submitEdition = e => {
    e.preventDefault();
    console.log(this.state);
    //CALL TO DB ?
  };

  render() {
    const { course, video } = this.state;
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

          {/* <Input
            label="Category:"
            handleChange={this.handleChange}
            name="category"
            text={course.category || ""}
            inputPlaceHolder="Edit field"
          /> */}

          <Input
            label="Description:"
            handleChange={this.handleChange}
            name="description"
            text={course.description}
            inputPlaceHolder="Edit field"
          />
          <h1>
            TODO // HANDLE IMAGE DISPLAY AND CHANGE// THIS DOESNT GO INTO AN
            INPUT{" "}
          </h1>
          <h1>TODO // COURSE LEVEL IS A DROPDOWN MENU</h1>
          <h1>TODO // CATEGORY DROPDOWN</h1>
          <Input
            label="Video:"
            handleChange={this.handleChange}
            name="video"
            text={video}
            inputPlaceHolder="Edit field"
          />

          {/* 
          <div>
            <label htmlFor="title">title:</label>
            <p onChange={onChange} name="title" className="input">
              {course.title}
            </p>
          </div>
          <div>
            <label htmlFor="category">Category:</label>
            <input name="category" className="input" value={course.category} />
          </div>

          <div>
            <label htmlFor="modules">Course Modules:</label>
            <input
              name="modules"
              className="input"
              value={course.courseModules}
            />
          </div>

          <div>
            <label htmlFor="description">Description:</label>
            <input
              name="description"
              className="input"
              value={course.description}
            />
          </div>

          <div>
            <label htmlFor="image">Image:</label>
            <input name="image" className="input" value={image} />
          </div>
          <div>
            <label htmlFor="video">Video:</label>
            <input name="video" className="input" value={video} />
          </div>
          <div>
            <label htmlFor="followers">Followers:</label>
            <input
              name="followers"
              className="input"
              value={course.followers}
            />
          </div>
          <div>
            <label htmlFor="level">Level:</label>
            <input name="level" className="input" value={course.level} />
          </div>
          <div>
            <label htmlFor="teacher">Teacher:</label>
            <input name="teacher" className="input" value={course.teacher} />
          </div> */}
          <button className="button">submit edition</button>
        </form>
      </React.Fragment>
    );
  }
}
