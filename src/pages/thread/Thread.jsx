import React, { Component } from "react";
import Post from "./Post";
import PostInput from "./PostInput";
class Thread extends Component {
  state = {
    postMessage: ""
  };

  handleChange = ({ currentTarget }) => {
    const key = currentTarget.name;
    const value = currentTarget.value;
    this.setState({ [key]: value });
  };
  handleKeyDown = ({ key }) => {
    if (key === "Enter") this.sendPost();
  };
  sendPost = () => {
    console.log(this.state.postMessage);
    this.setState({ postMessage: "" });
  };
  render() {
    return (
      <section className="section thread-section">
        <h1>Thread Page</h1>
        <div className="post-message column is-5">
          <Post />
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
