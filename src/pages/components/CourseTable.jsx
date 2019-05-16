import React, { Component } from "react";
import { Link } from "react-router-dom";

import { getLessons } from "../../api/lessonHandler";
import { cpus } from "os";

export default class CourseTable extends Component {
  state = {
    course: [],
    lessons: [],
    description: ""
  };

  componentDidMount() {}

  render() {
    console.log(this.props.mod);
    const { mod } = this.props;
    return (
      <>
        <h2 id={mod._id} className="title">{`Module ${this.props.index +
          1}`}</h2>
        <article className="columns course-article">
          <table className="table course-table is-hoverable ">
            <thead>
              <tr>
                <th />
                <th>Duration</th>
                <th>Remaining</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                {mod.lessons.map((l, i) => (
                  <td key={i}>
                    <Link to={`/lesson/${mod._id}`}>{l.title}</Link>
                  </td>
                ))}
                <td>5h 30min</td>
                <td>3h 20min</td>
              </tr>
            </tbody>
          </table>

          <div className="course-table table is-hoverable is-fullwidth">
            <article className="message has-background-white">
              {mod.lessons.map((l, i) => (
                <div key={i} className="message-body">
                  {l.description}
                </div>
              ))}
            </article>
          </div>
        </article>
      </>
    );
  }
}
