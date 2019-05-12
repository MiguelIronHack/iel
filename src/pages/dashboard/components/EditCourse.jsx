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

  onChange = e => {
    this.setState({
      course: {
        [e.target.name]: e.target.innerHTML
      }
    });
  };

  onClick = e => {
    e.preventDefault();
    const target = e.target.parentElement.childNodes[1];
    target.contentEditable = "true";
    console.log(target.innerHTML);
    this.setState({
      course: {
        [e.target.name]: e.target.innerHTML
      }
    });
  };

  submitEdition = e => {
    e.preventDefault();
    console.log(e.target.id);
    console.log(this.state.course);
    // updateCourse({});
  };

  render() {
    const { course, image, video } = this.state;
    const { onChange, onClick, submitEdition } = this;

    return (
      <React.Fragment>
        <DashboardNav rowId={course._id} />
        <form
          id={course._id}
          onSubmit={submitEdition}
          className="edit-course box"
        >
          <div>
            <label htmlFor="title">title:</label>
            <p onChange={onChange} name="title" className="input">
              {course.title}
            </p>
            <button onClick={onClick} className="button">
              edit
            </button>
          </div>

          <div>
            <label htmlFor="category">Category:</label>
            <input name="category" className="input" value={course.category} />
            <button onClick={onChange} className="button">
              edit
            </button>
          </div>

          <div>
            <label htmlFor="modules">Course Modules:</label>
            <input
              name="modules"
              className="input"
              value={course.courseModules}
            />
            <button onClick={onChange} className="button">
              edit
            </button>
          </div>

          <div>
            <label htmlFor="description">Description:</label>
            <input
              name="description"
              className="input"
              value={course.description}
            />

            <button onClick={onChange} className="button">
              edit
            </button>
          </div>

          <div>
            <label htmlFor="image">Image:</label>
            <input name="image" className="input" value={image} />
            <button className="button" onClick={onChange}>
              edit
            </button>
          </div>

          <div>
            <label htmlFor="video">Video:</label>
            <input name="video" className="input" value={video} />
            <button className="button" onClick={onChange}>
              edit
            </button>
          </div>

          <div>
            <label htmlFor="followers">Followers:</label>
            <input
              name="followers"
              className="input"
              value={course.followers}
            />
            <button onClick={onChange} className="button">
              edit
            </button>
          </div>

          <div>
            <label htmlFor="level">Level:</label>
            <input name="level" className="input" value={course.level} />
            <button onClick={onChange} className="button">
              edit
            </button>
          </div>

          <div>
            <label htmlFor="teacher">Teacher:</label>
            <input name="teacher" className="input" value={course.teacher} />
            <button onClick={onChange} className="button">
              edit
            </button>
          </div>

          <button className="button">submit edition</button>
        </form>
      </React.Fragment>
    );
  }
}
