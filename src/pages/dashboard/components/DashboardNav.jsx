import React from "react";
import { NavLink } from "react-router-dom";
import "./dashboardComponents.css";

export default function dashboardnav() {
  return (
    <React.Fragment>
      <div className="has-background-grey-dark  is-active dashboard-nav">
        <NavLink className="" to="/dashboard">
          Dashboard
        </NavLink>
        <NavLink className="" to="/userManagement">
          Manage Users
        </NavLink>
        <NavLink className="" to="/courseManagement">
          Manage Courses
        </NavLink>
      </div>
    </React.Fragment>
  );
}
