import React, { Component } from "react";
import DashboardNav from "./components/DashboardNav";
import "./components/dashboardComponents.css";
import { Link } from "react-router-dom";

export default class Dashboard extends Component {
  render() {
    return (
      <React.Fragment>
        <DashboardNav />
        <div className="dashboard-icons">
          <Link to="/userManagement">
            <i class="fas fa-users fa-9x">
              <span>Users</span>
            </i>
          </Link>
          <Link to="/userManagement">
            <i class="fab fa-leanpub fa-9x">
              <span>Courses</span>
            </i>
          </Link>
          <Link to="/userManagement">
            <i class="fas fa-object-group fa-9x">
              <span>Categories</span>
            </i>
          </Link>
        </div>
      </React.Fragment>
    );
  }
}
