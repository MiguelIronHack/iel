import React, { Component } from "react";
import { Message, Button } from "react-bulma-components";
import { Link } from "react-router-dom";
import "./lessonsTable.css";

export default class LessonTable extends Component {
  render() {
    return (
      <Message>
        <Message.Header>Title</Message.Header>
        <Message.Body>
          <table className="table lessons-table is-fullwidth">
            <thead>
              <tr>
                <th>Module {this.props.moduleTitle}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <Link className="lesson-link" to="lesson">
                    <span>Lesson 1.1</span>
                  </Link>
                </td>
                <td>
                  <Button remove />
                </td>
              </tr>
            </tbody>
          </table>
        </Message.Body>
      </Message>
    );
  }
}
