import React, { Component } from "react";
import Chevron from "../../../media/chevron.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./nextSection.css";

export class NextSection extends Component {
  render() {
    return (
      <a href={this.props.href} className={this.props.className}>
       <img className='chevron' src={Chevron} alt='chevron' />
      </a>
    );
  }
}

export default NextSection;
