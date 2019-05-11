import React from "react";
import { NavLink } from "react-router-dom";
import "./dashboardComponents.css";

export default function dashboardnav() {
  return (
    <React.Fragment>
      <div className="has-background-grey-dark  is-active dashboard-nav">
        <NavLink to="/dashboard">Dashboard</NavLink>
        <NavLink to="/userManagement">Manage Users</NavLink>
        <NavLink to="/courseManagement">Manage Courses</NavLink>
        <NavLink to="/edit-categories">Manage Categories</NavLink>
      </div>
    </React.Fragment>
  );
}
