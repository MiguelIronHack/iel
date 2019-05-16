import React, { Component } from "react";
import Post from "./Post";
import PostInput from "./PostInput";
class Thread extends Component {
  state = {};
  render() {
    return (
      <section className="section thread-section">
        <h1>Thread Page</h1>
        <Post />
        <PostInput />
      </section>
    );
  }
}

export default Thread;
