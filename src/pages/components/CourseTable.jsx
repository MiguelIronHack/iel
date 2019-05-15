import React, { Component } from "react";
import { Link } from "react-router-dom";
import { getAllCourses } from "../../api/coursesHandler";
import { getLessons } from "../../api/lessonHandler";

export default class CourseTable extends Component {
  state = {
    course: [],
    lessons: [],
    description: ""
  };

  componentDidMount() {
    getAllCourses()
      .then(res =>
        this.setState({
          course: [...res.data]
        })
      )
      .catch(err => console.error(err));
    getLessons()
      .then(res =>
        this.setState({
          lessons: res.data
        })
      )
      .catch(err => console.error(err));
  }

  render() {
    const { lessons } = this.state;
    console.log(lessons);
    return (
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
              {lessons.map((l, i) => (
                <td key={i}>
                  <Link to={`/lesson/${l._id}`}>{l.title}</Link>
                </td>
              ))}
              <td>5h 30min</td>
              <td>3h 20min</td>
            </tr>
          </tbody>
        </table>

        <div className="course-table table is-hoverable is-fullwidth">
          <article className="message has-background-white">
            {lessons.map((l, i) => (
              <div key={i} className="message-body">
                {l.description}
              </div>
            ))}
          </article>
        </div>
      </article>
    );
  }
}
