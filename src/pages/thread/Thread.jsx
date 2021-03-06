import React, { Component } from "react";
import Post from "./Post";
import PostInput from "./PostInput";
import "./thread.css";
import { getCourse } from "../../api/coursesHandler";
import { updateThread } from "../../api/threadHandler";
import { getLocalToken } from "./../../api/ajaxLogin";
class Thread extends Component {
  state = {
    postMessage: "",
    thread: { comments: [] }
  };

  componentDidMount() {
    const courseId = this.props.match.params.courseId;
    this.setState({ courseId });
    getCourse(courseId)
      .then(({ data: course }) => {
        // this.props.history.push(`${course.title}`);
        this.setState({ thread: course.thread, course });
      })
      .catch(err => console.log(err));
  }

  handleChange = ({ currentTarget }) => {
    const key = currentTarget.name;
    const value = currentTarget.value;
    this.setState({ [key]: value });
  };

  handleKeyDown = ({ key }) => {
    if (key === "Enter") this.sendPost();
  };

  sendPost = () => {
    if (!this.state.postMessage) return null;
    const comments = [...this.state.thread.comments];
    const comment = {
      owner: getLocalToken()._id,
      message: this.state.postMessage,
      date: Date.now()
    };
    comments.push(comment);
    const thread = { ...this.state.thread };
    thread.comments = comments;

    updateThread(thread._id, { comments: thread.comments })
      .then(({ data }) => {
        this.setState({ postMessage: "", thread: data });
      })
      .catch(err => console.log(err));
  };
  render() {
    const { course } = this.state;
    if (!course) return null;
    return (
      <section className="thread-section">
        <h1 className="title">
          {`Course comments for: ${course.title}` || "Thread"}
        </h1>
        <div className="post-message column is-5">
          <Post comments={this.state.thread.comments || []} />
        </div>
        <div className="post-send column is-6 is-centered">
          <PostInput
            handleKeyDown={this.handleKeyDown}
            value={this.state.postMessage}
            name="postMessage"
            handleChange={this.handleChange}
          />
        </div>
      </section>
    );
  }
}

export default Thread;
