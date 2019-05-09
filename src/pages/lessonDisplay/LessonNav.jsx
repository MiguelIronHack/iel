import React, { Component } from "react";
import {
  faChevronLeft,
  faChevronRight
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default class LessonNav extends Component {
  onClick = e => {
    console.log(e);
  };

  render() {
    return (
      <React.Fragment>
        <div
          onClick={this.onClick}
          className="has-background-grey-dark  is-active lesson-nav"
        >
          <Link className="lesson-nav-left" to="/prev">
            <span className="has-text-white-ter">
              <FontAwesomeIcon
                className="lesson-nav-icon"
                icon={faChevronLeft}
              />
              Previous
            </span>
          </Link>

          {this.props.title}
          <Link className="lesson-nav-right" to="">
            <span className="lesson-nav-right has-text-white-ter">
              Next
              <FontAwesomeIcon
                className="lesson-nav-icon"
                icon={faChevronRight}
              />
            </span>
          </Link>
        </div>
      </React.Fragment>
    );
  }
}
