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
    const { mod } = this.props;
    return (
      <>
        <h2 id={mod._id} className="title">{`Module ${this.props.index +
          1}`}</h2>
        <article className="columns course-article">
          <table className="table course-table is-hoverable ">
            <thead>
              <tr>
                <th>Lessons</th>
              </tr>
            </thead>
            <tbody>
              {mod.lessons.map((l, i) => (
                <tr key={i}>
                  <td>
                    <Link
                      to={{
                        pathname: `/lesson/${mod._id}`,
                        state: { currentPage: i }
                      }}
                    >
                      {l.title}
                    </Link>
                    {/* <Link to={`/lesson/${mod._id}`}>{l.title}</Link> */}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="course-table table is-hoverable is-fullwidth course-table-message">
            <article className="message">
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
