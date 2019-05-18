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
        console.log(course);
        // this.props.history.push(`${course.title}`);
        this.setState({ thread: course.thread });
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
    const comments = [...this.state.thread.comments];
    const comment = {
      owner: getLocalToken()._id,
      message: this.state.postMessage
    };
    comments.push(comment);
    const thread = { ...this.state.thread };
    thread.comments = comments;

    updateThread(thread._id, { comments: thread.comments })
      .then(res => {})
      .catch(err => console.log(err));
    this.setState({ postMessage: "", thread });
  };
  render() {
    return (
      <section className="thread-section">
        <h1 className="title">Threads</h1>
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
