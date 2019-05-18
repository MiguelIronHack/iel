import React from "react";
import Moment from "react-moment";

const Post = ({ comments }) => {
  if (!comments.length)
    return <h1 className="title">No comments yet, be the first one ! </h1>;

  return comments.map((com, i) => (
    <div key={i} className="content">
      <h1>{com.message}</h1>
      <span className={"tag is-primary"}>{com.owner.userName}</span>
      <Moment format="YYYY-MM-DD HH:mm">{com.date}</Moment>
    </div>
  ));
};

export default Post;
