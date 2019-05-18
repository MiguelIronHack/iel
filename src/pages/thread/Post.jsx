import React from "react";

const Post = ({ comments }) => {
  if (!comments.length)
    return <h1 className="title">No comments yet, be the first one ! </h1>;

  return comments.map((com, i) => (
    <div key={i} className="content">
      <h1>{com.message}</h1>
      <span className={"tag is-primary"}>{com.owner.userName}</span>
      <p>{com.date}</p>
    </div>
  ));
};

export default Post;
