import React from "react";
import _ from "lodash";

const Pagination = ({ pages, currentPage, pageSize }) => {
  const classes = "pagination-link";
  return (
    <nav
      className="pagination is-centered"
      role="navigation"
      aria-label="pagination"
    >
      <ul className="pagination-list">
        {pages.map(page => (
          <li>
            <a
              href
              className={
                page === currentPage ? `${classes} is-current` : classes
              }
            >
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
