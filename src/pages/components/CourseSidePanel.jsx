import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComments,
  faBook,
  faCircle,
  faCheckCircle
} from "@fortawesome/free-solid-svg-icons";
export default class CourseSidePanel extends Component {
  render() {
    const { courseModules } = this.props;

    return (
      <aside className="panel course-panel column shadow">
        <p className="panel-heading" />

        {courseModules.map((mod, i) => (
          <a href={`#${mod._id}`}>
            <label className="panel-block has-background-dark has-text-white aside-panel-text">
              {`Module ${i + 1}`}
              <span className="panel-icon aside-panel-icon">
                <FontAwesomeIcon icon={faCheckCircle} />
              </span>
            </label>
          </a>
        ))}

        <label className="panel-block has-background-dark has-text-white aside-panel-text">
          <div className="aside-panel-text">Forum</div>
          <span className="panel-icon aside-panel-icon">
            <FontAwesomeIcon icon={faComments} />
          </span>
        </label>

        <label className="panel-block has-background-dark has-text-white aside-panel-text">
          <div className="aside-panel-text"> Info</div>
          <span className="panel-icon aside-panel-icon">
            <FontAwesomeIcon icon={faBook} />
          </span>
        </label>
        <p className="panel-heading panel-footer" />
      </aside>
    );
  }
}
