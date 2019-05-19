import React from "react";
import Moment from "react-moment";

const Post = ({ comments }) => {
  if (!comments.length)
    return <h1 className="title">No comments yet, be the first one ! </h1>;
  console.log(comments);

  return comments.map((com, i) => (
    <div key={i} className="content">
      <div className="post-user-and-date">
        <img src={com.owner.avatar} className="icon" />
        <div>{com.owner.userName}</div>
        <div className="post-date">
          <Moment fromNow="YYYY-MM-DD HH:mm">{com.date}</Moment>
        </div>
      </div>

      <p className="thread-message">{com.message}</p>
    </div>
  ));
};

export default Post;
