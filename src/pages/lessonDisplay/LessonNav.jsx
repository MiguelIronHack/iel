import React from "react";
import {
  faChevronLeft,
  faChevronRight
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LessonNav = ({ title, handlePage, currentPage, max }) => {
  const pageChange = ({ currentTarget }) => {
    const direction = currentTarget.className.replace("lesson-nav-", "");
    handlePage(direction);
  };

  return (
    <React.Fragment>
      <div className="has-background-grey-dark  is-active lesson-nav">
        <p
          onClick={pageChange}
          name="left"
          className={
            currentPage <= 0 ? "lesson-nav-left active" : "lesson-nav-left"
          }
        >
          <span>
            <FontAwesomeIcon className="lesson-nav-icon" icon={faChevronLeft} />
            Previous
          </span>
        </p>
        <p className="lesson-nav-title">{title}</p>
        <p
          onClick={pageChange}
          direction="right"
          className={
            currentPage >= max - 1
              ? "lesson-nav-right active"
              : "lesson-nav-right"
          }
        >
          <span
            className={
              currentPage >= max - 1
                ? "lesson-nav-right active"
                : "lesson-nav-right"
            }
          >
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
