import React, { Component } from "react";
import Post from "./Post";
import PostInput from "./PostInput";
import "./thread.css";
import { getCourse } from "../../api/coursesHandler";
import { updateThread } from "../../api/threadHandler";
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
        this.props.history.push(`${course.title}`);
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

    const threadId = this.state.thread.id;
    console.log(threadId);
    // updateThread(thi)
  };
  sendPost = () => {
    this.setState({ postMessage: "" });
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
