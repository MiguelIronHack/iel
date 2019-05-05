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
        <FontAwesomeIcon size="3x" icon={faReact} />
        <FontAwesomeIcon size="3x" icon={faGithub} />
        <FontAwesomeIcon size="3x" icon={faNodeJs} />
        <FontAwesomeIcon size="3x" icon={faUbuntu} />
      </footer>
    );
  }
}
