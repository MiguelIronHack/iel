import React, { Component } from "react";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./nextSection.css";

export class NextSection extends Component {
  render() {
    return (
      <a href={this.props.href} className={this.props.className}>
        <FontAwesomeIcon size="3x" icon={faChevronDown} />
      </a>
    );
  }
}

export default NextSection;
