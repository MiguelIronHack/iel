import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class CourseTable extends Component {
  render() {
    return (
      <article className="columns">
        <table className="table course-table is-hoverable is-fullwidth ">
          <thead>
            <tr>
              <th />
              <th>Duration</th>
              <th>Remaining</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Lessons</td>
              <td>5h 30min</td>
              <td>3h 20min</td>
            </tr>
            <tr>
              <td>Exercises</td>
              <td>5h 30min</td>
              <td>3h 20min</td>
            </tr>
            <tr>
              <td>
                <Link
                  className=" button is-primary resume-course-btn"
                  to="course-content"
                >
                  Resume
                </Link>
              </td>
            </tr>
          </tbody>
        </table>

        <div className="course-table table is-hoverable is-fullwidth">
          <article className="message has-background-white">
            <div className="message-body">
              tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex
              sit amet fringilla. Nullam gravida purus diam, et dictum
              efficitur. Aenean ac <em>eleifend lacus</em>, in mollis lectus.
              Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor
              ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et
              sem eget, facilisis sodales sem.
            </div>
          </article>
        </div>
      </article>
    );
  }
}
