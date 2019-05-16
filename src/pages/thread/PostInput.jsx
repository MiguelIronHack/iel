import React from "react";

const PostInput = () => {
  return (
    <div className="control  has-icons-right">
      <input
        className="input"
        type="text"
        placeholder="Ask any questions related to the course here !"
      />
      <span className="icon is-small is-right">
        <i class="fas fa-paper-plane" />
      </span>
    </div>
  );
};

export default PostInput;
