import React, { Component } from "react";
import Post from "./Post";
import PostInput from "./PostInput";
class Thread extends Component {
  state = {};
  render() {
    return (
      <section className="section thread-section">
        <h1>Thread Page</h1>
        <div className="column is-5">
          <Post />
        </div>
        <div className="column is-6 is-centered">
          <PostInput />
        </div>
      </section>
    );
  }
}

export default Thread;
