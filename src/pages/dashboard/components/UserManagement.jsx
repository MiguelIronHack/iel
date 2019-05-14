import React, { Component } from "react";
import DashboardNav from "./DashboardNav";
import { getAllUsers, deleteUser } from "../../../api/userHandler";
import "./dashboardComponents.css";
import Btn from "../../../components/Btn";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faUserTimes } from "@fortawesome/free-solid-svg-icons";
// import { faUserEdit } from "@fortawesome/free-solid-svg-icons";

export default class UsersList extends Component {
  state = { users: [] };

  componentDidMount() {
    this.displayBoard();
  }

  displayBoard() {
    getAllUsers()
      .then(res => {
        this.setState({ users: res.data });
      })
      .catch(err => console.error(err.response));
  }

  handleModify = e => {
    const id = e.target.getAttribute("data-id");
    console.log("this is the user ID to MODIFY: ", id);
  };

  handleDelete = e => {
    const id = e.target.getAttribute("data-id");
    console.log("this is the user ID to DELETE: ", id);

    deleteUser(id)
      .then(res => {
        this.displayBoard();
      })
      .catch(err => console.error(err.response, "qqqqqq"));
  };

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
                <td className="td">{user.firsName}</td>
                <td className="td">{user.lastName}</td>
                <td className="td">{user.email}</td>
                <td className="td edit-user">
                  <i
                    data-id={user._id}
                    onClick={this.handleModify}
                    className="fas fa-user-edit"
                  />
                </td>
                <td className="td delete-user">
                  <i
                    data-id={user._id}
                    onClick={this.handleDelete}
                    className="fas fa-user-times"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Btn name="Create New User" toPage="create-users" />
      </React.Fragment>
    );
  }
}
