import React from "react";

const PostInput = ({ value, name, handleKeyDown, handleChange }) => {
  return (
    <div className="control  has-icons-right">
      <input
        onKeyDown={e => handleKeyDown(e)}
        onChange={e => handleChange(e)}
        name={name}
        className="input"
        type="text"
        value={value}
        placeholder="Ask any questions related to the course here !"
      />
      <span className="icon is-small is-right">
        <i className="fas fa-paper-plane" />
      </span>
    </div>
  );
};

export default PostInput;
