import React, { Component } from "react";
import DashboardNav from "./DashboardNav";
import { getAllUsers } from "../../../api/userHandler";
import { Link } from "react-router-dom";
import "./dashboardComponents.css";

export default class UsersList extends Component {
  state = { users: [] };
  componentDidMount() {
    console.log("users before function: ", this.state.users);
    getAllUsers()
      .then(res => {
        console.log("users after function: ", res.data);
        this.setState({ users: res.data });
      })
      .catch(err => console.error(err.response));
  }
  render() {
    const { users } = this.state;
    console.log(users);
    return (
      <React.Fragment>
        <DashboardNav />
        <table className="table">
          <thead className="thead">
            <tr className="tr">
              <th className="th">Name</th>
              <th className="th">Surname</th>
              <th className="th">Email</th>
              <th className="th">Edit</th>
              <th className="th">Delete</th>
            </tr>
          </thead>
          <tbody className="tbody">
            {users.map((user, index) => (
              <tr className="tr" key={index}>
                <td className="td">{user.firstName}</td>
                <td className="td">{user.lastName}</td>
                <td className="td">{user.email}</td>
                <td className="td">EDIT</td>
                <td className="td">X</td>
              </tr>
            ))}
            ;
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}
