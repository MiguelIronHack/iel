import React from "react";

const Upvote = ({ like, course, liked }) => {
  const raiseLike = course => {
    like(course);
  };
  // console.log("there");
  return (
    <span
      style={
        liked
          ? { pointerEvents: "none" }
          : { pointerEvents: "all", color: "hsl(141, 71%, 48%)" }
      }
      onClick={() => raiseLike(course)}
    >
      <i className="fas fa-arrow-circle-up" />
    </span>
  );
};

export default Upvote;
