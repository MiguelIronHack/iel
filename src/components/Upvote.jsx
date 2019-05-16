import React from "react";

const Upvote = ({ like }) => {
  return (
    <span onClick={like}>
      <i class="fas fa-arrow-circle-up" />
    </span>
  );
};

export default Upvote;
