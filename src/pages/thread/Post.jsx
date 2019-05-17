import React from "react";

const Post = ({ comments }) => {
  if (!comments.length)
    return <h1 className="title">No comments yet, be the first one ! </h1>;

  return (
    <div className="content">
      <h1>Hello</h1>
      <span className="tag is-primary">username</span>
      <p>date</p>
    </div>
  );
};

export default Post;
