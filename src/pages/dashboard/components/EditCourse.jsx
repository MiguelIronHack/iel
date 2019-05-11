import React, { Component } from "react";
import DashboardNav from "../components/DashboardNav";
import { getCourse } from "../../../api/coursesHandler";

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
    // remember this tricks to get access to url infos
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
    const target = e.target.parentElement.firstChild.childNodes[1];
    console.log(target);
    target.contentEditable = true;
    // target.autofocus = true;
  };

  render() {
    const { course } = this.state;
    const { editContent } = this;

    return (
      <React.Fragment>
        <DashboardNav rowId={course._id} />
        <section className="edit-course box">
          <div>
            <p>
              title: <span contentEditable={false}>{course.title}</span>
            </p>
            <p onClick={editContent}>edit</p>
          </div>
          <div>
            <p>
              Category: <span contentEditable={false}>{course.category}</span>
            </p>
            <p onClick={editContent}>edit</p>
          </div>
          <div>
            <p>
              Course Modules:
              <span contentEditable={false}>{course.courseModules}</span>
            </p>
            <p onClick={editContent}>edit</p>
          </div>
          <div>
            <p>
              Date Created:
              <span contentEditable={false}>{course.created_at}</span>
            </p>
            <p onClick={editContent}>edit</p>
          </div>
          <div>
            <p>
              Description:
              <span contentEditable={false}>{course.description}</span>
            </p>
            <p onClick={editContent}>edit</p>
          </div>
          <div>
            <p>
              Followers: <span contentEditable={false}>{course.followers}</span>
            </p>
            <p onClick={editContent}>edit</p>
          </div>
          <div>
            <p>
              Level: <span contentEditable={false}>{course.level}</span>
            </p>
            <p onClick={editContent}>edit</p>
          </div>
          <div>
            <p>
              Image: <span contentEditable={false}>{this.state.image}</span>
            </p>
            <p onClick={editContent}>edit</p>
          </div>
          <div>
            <p>
              Video: <span contentEditable={false}>{this.state.video}</span>
            </p>
            <p onClick={editContent}>edit</p>
          </div>
          <div>
            <p>
              Teacher: <span contentEditable={false}>{course.teacher}</span>
            </p>
            <p onClick={editContent}>edit</p>
          </div>
        </section>
      </React.Fragment>
    );
  }
}
