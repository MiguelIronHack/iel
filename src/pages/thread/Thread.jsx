import React, { Component } from "react";
import Input from "../../components/Input";
import Post from "./Post";

class Thread extends Component {
  state = {};
  render() {
    return (
      <section className="section thread-section">
        <h1>Thread Page</h1>
        <Post />
        <Input />
      </section>
    );
  }
}

export default Thread;
