import React from "react";
import {
  faChevronLeft,
  faChevronRight
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const LessonNav = ({ title, handlePage }) => {
  const pageChange = ({ currentTarget }) => {
    const direction = currentTarget.className.replace("lesson-nav-", "");
    handlePage(direction);
  };

  return (
    <React.Fragment>
      <div className="has-background-grey-dark  is-active lesson-nav">
        <p onClick={pageChange} name="left" className="lesson-nav-left active">
          <span>
            <FontAwesomeIcon className="lesson-nav-icon" icon={faChevronLeft} />
            Previous
          </span>
        </p>
        <p className="lesson-nav-title">{title}</p>
        <p onClick={pageChange} direction="right" className="lesson-nav-right">
          <span>
            Next
            <FontAwesomeIcon
              className="lesson-nav-icon"
              icon={faChevronRight}
            />
          </span>
        </p>
      </div>
    </React.Fragment>
  );
};

export default LessonNav;
