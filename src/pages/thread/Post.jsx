import React from "react";
import Moment from "react-moment";

import { Link } from "react-router-dom";
const Post = ({ comments }) => {
  if (!comments.length)
    return <h1 className="title">No comments yet, be the first one ! </h1>;

  return comments.map((com, i) => (
    <div key={i} className="content">
      <div className="post-user-and-date">
        <img src={com.owner.avatar} className="icon" alt={com.owner.avatar} />
        <Link to={`/user/profile/${com.owner._id}`}>{com.owner.userName}</Link>
        <div className="post-date">
          <Moment fromNow="YYYY-MM-DD HH:mm">{com.date}</Moment>
        </div>
      </div>

      <p className="thread-message">{com.message}</p>
    </div>
  ));
};

export default Post;
