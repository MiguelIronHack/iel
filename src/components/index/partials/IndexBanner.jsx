import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faGithub,
  faNodeJs,
  faUbuntu
} from "@fortawesome/free-brands-svg-icons";

export default class Banner extends Component {
  render() {
    return (
      <footer id="index-banner" className="index-banner bb">
        <span className="index-banner-icon">
          <FontAwesomeIcon size="3x" icon={faReact} />
        </span>
        <span className="index-banner-icon">
          <FontAwesomeIcon size="3x" icon={faGithub} />
        </span>
        <span className="index-banner-icon">
          <FontAwesomeIcon size="3x" icon={faNodeJs} />
        </span>
        <span className="index-banner-icon">
          <FontAwesomeIcon size="3x" icon={faUbuntu} />
        </span>
      </footer>
    );
  }
}
