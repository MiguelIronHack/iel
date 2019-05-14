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
          <button className="lesson-nav-left">
            <span className="has-text-white-t er">
              <FontAwesomeIcon
                className="lesson-nav-icon"
                icon={faChevronLeft}
              />
              Previous
            </span>
          </button>

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
