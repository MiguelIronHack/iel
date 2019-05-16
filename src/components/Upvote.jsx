import React from "react";

const Upvote = ({ like, course, liked }) => {
  const raiseLike = course => {
    like(course);
  };

  return (
    <span
      style={liked ? { pointerEvents: "none" } : { pointerEvents: "all" }}
      onClick={() => raiseLike(course)}
    >
      <i className="fas fa-arrow-circle-up" />
    </span>
  );
};

export default Upvote;
