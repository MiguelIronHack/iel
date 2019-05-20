import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default class CourseSidePanel extends Component {
  render() {
    const { courseModules: data } = this.props;

    return (
      <aside className="panel course-panel column shadow">
        <p className="panel-heading" />

        {data.map((mod, i) => (
          <a href={`#${mod._id}`}>
            <label className="panel-block has-background-dark has-text-white aside-panel-text">
              {`Module ${i + 1}`}
              <span className="panel-icon aside-panel-icon">
                <FontAwesomeIcon icon={faCircle} />
              </span>
            </label>
          </a>
        ))}
        <Link to={this.props.firstNavItemLink}>
          <label className="panel-block has-background-dark has-text-white aside-panel-text">
            <div className="aside-panel-text">{this.props.firstNavItem}</div>
            <span className="panel-icon aside-panel-icon">
              <FontAwesomeIcon icon={this.props.firstNavItemIcon} />
            </span>
          </label>
        </Link>

        <Link to={this.props.secondNavItemLink}>
          <label className="panel-block has-background-dark has-text-white aside-panel-text">
            <div className="aside-panel-text">{this.props.secondNavItem}</div>
            <span className="panel-icon aside-panel-icon">
              <FontAwesomeIcon icon={this.props.secondNavItemIcon} />
            </span>
          </label>
        </Link>

        <Link to={this.props.thirdNavItemLink}>
          <label className="panel-block has-background-dark has-text-white aside-panel-text">
            <div className="aside-panel-text">{this.props.thirdNavItem}</div>
            <span className="panel-icon aside-panel-icon">
              <FontAwesomeIcon icon={this.props.thirdNavItemIcon} />
            </span>
          </label>
        </Link>
        <Link to={this.props.fourthNavItemLink}>
          <label className="panel-block has-background-dark has-text-white aside-panel-text">
            <div className="aside-panel-text">{this.props.fourthNavItem}</div>
            <span className="panel-icon aside-panel-icon">
              <FontAwesomeIcon icon={this.props.fourthNavItemIcon} />
            </span>
          </label>
        </Link>
        <Link to={this.props.fifthNavItemLink}>
          <label className="panel-block has-background-dark has-text-white aside-panel-text">
            <div className="aside-panel-text">{this.props.fifthNavItem}</div>
            <span className="panel-icon aside-panel-icon">
              <FontAwesomeIcon icon={this.props.fifthNavItemIcon} />
            </span>
          </label>
        </Link>
        <Link to={this.props.sixthNavItemLink}>
          <label className="panel-block has-background-dark has-text-white aside-panel-text">
            <div className="aside-panel-text">{this.props.sixthNavItem}</div>
            <span className="panel-icon aside-panel-icon">
              <FontAwesomeIcon icon={this.props.sixthNavItemIcon} />
            </span>
          </label>
        </Link>
        <p className="panel-heading panel-footer" />
      </aside>
    );
  }
}
