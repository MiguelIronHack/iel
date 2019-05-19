import React from "react";

const Upvote = ({ like, course, liked }) => {
  const raiseLike = course => {
    like(course);
  };
<<<<<<< HEAD

=======
  // console.log("there");
>>>>>>> ce2764bcbf6e3aabc21fd69f9296ab871e50095b
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
