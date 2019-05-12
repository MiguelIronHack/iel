import React, { Component } from "react";
import DashboardNav from "../components/DashboardNav";
import { getCourse, updateCourse } from "../../../api/coursesHandler";

export default class CourseDetails extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      course: {},
      image: "",
      video: ""
    };
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

  editContent = e => {
    e.preventDefault();
    const target = e.target.parentElement.childNodes[1];
    target.contentEditable = true;
    target.style.backgroundColor = "#FCD0A1";
  };

  submitEdition = e => {
    e.preventDefault();
    console.log(e.target);
    updateCourse({});
  };

  render() {
    const { course, image, video } = this.state;
    const { editContent, handleSubmit: submitEdition } = this;

    return (
      <React.Fragment>
        <DashboardNav rowId={course._id} />
        <form
          id={course._id}
          onSubmit={submitEdition}
          className="edit-course box"
        >
          <div>
            <p>title:</p>
            <p>{course.title}</p>
            <button className="button" onClick={editContent}>
              edit
            </button>
          </div>

          <div>
            <p>Category:</p>
            <p>{course.category}</p>
            <button className="button" onClick={editContent}>
              edit
            </button>
          </div>

          <div>
            <p>Course Modules:</p>
            <p>{course.courseModules}</p>
            <button className="button" onClick={editContent}>
              edit
            </button>
          </div>

          <div>
            <p>Description:</p>
            <p>{course.description}</p>
            <button className="button" onClick={editContent}>
              edit
            </button>
          </div>

          <div>
            <p>Image:</p>
            <p className="react-bug"> {image} </p>
            <button className="button" onClick={editContent}>
              edit
            </button>
          </div>

          <div>
            <p>Video:</p>
            <p className="react-bug">{video}</p>
            <button className="button" onClick={editContent}>
              edit
            </button>
          </div>

          <div>
            <p>Followers:</p>
            <p>{course.followers}</p>
            <button className="button" onClick={editContent}>
              edit
            </button>
          </div>

          <div>
            <p>Level:</p>
            <p>{course.level}</p>
            <button className="button" onClick={editContent}>
              edit
            </button>
          </div>

          <div>
            <p>Teacher:</p>
            <p>{course.teacher}</p>
            <button className="button" onClick={editContent}>
              edit
            </button>
          </div>

          <button onClick={submitEdition} className="button">
            submit edition
          </button>
        </form>
      </React.Fragment>
    );
  }
}
