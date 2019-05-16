import React, { Component } from "react";
import DashboardNav from "./components/DashboardNav";
import "./components/dashboardComponents.css";
import { Link } from "react-router-dom";

export default class Dashboard extends Component {
  render() {
    return (
      <section className='course-management-section shadow'>
        <DashboardNav />
        <div className="dashboard-icons">
          <Link className="dashboard-showcase-link" to="/userManagement">
            <i className="fas fa-users fa-9x">
              <span>Users</span>
            </i>
          </Link>
          <Link className="dashboard-showcase-link" to="/courseManagement">
            <i className="fab fa-leanpub fa-9x">
              <span>Courses</span>
            </i>
          </Link>
          <Link className="dashboard-showcase-link" to="/edit-categories">
            <i className="fas fa-object-group fa-9x">
              <span>Categories</span>
            </i>
          </Link>
        </div>
      </section>
    );
  }
}
