import React, { Component } from "react";
import { getAllCategories } from "../../api/categoryHandler";
import { getCategory } from "../../api/categoryHandler";
import { getAllCourses } from "../../api/coursesHandler";
import { Link } from "react-router-dom";
import { Columns } from "react-bulma-components";
import "./explore.css";
import CourseCard from "../../components/CourseCard";

export default class explore extends Component {
  state = {
    categories: [],
    allCourses: [],
    courses: []
  };

  componentDidMount() {
    getAllCategories()
      .then(res => {
        this.setState({
          categories: res.data,
          courses: res.data[0].courses
        });
        console.log(res.data[0].courses, "dddddd");
      })
      .catch(err => console.error(err.response, "qqqqqq"));

    getAllCourses()
      .then(res => {
        this.setState({
          allCourses: res.data
        });
      })
      .catch(err => console.error(err.response, "qqqqqq"));
  }

  handleCategory = e => {
    const id = e._id;
    getCategory(id)
      .then(res => {
        console.log("clisk en category ", res.data);
        this.setState({
          selectedCategory: res.data,
          courses: res.data.courses
        });
        console.log(this.state.courses, " coouurrsseess");
      })
      .catch(err => console.error(err.response, "qqqqqq"));
  };

  render() {
    const { categories, courses, allCourses } = this.state;
    return (
      <div>
        <div>
          <h1>Explore courses by category</h1>
          <div className="explore-section">
            <ul className="categories-menu">
              {categories.map((cat, index) => (
                <li
                  key={index}
                  data-id={cat._id}
                  onClick={e => this.handleCategory(cat)}
                >
                  {cat.name}
                </li>
              ))}
            </ul>
            <Columns>
              {courses.map((course, index) => (
                <Columns.Column size={4} key={index}>
                  <CourseCard
                    key={index}
                    title={course.title}
                    description={course.description}
                    date={course.date}
                  />
                </Columns.Column>
              ))}
            </Columns>
          </div>
        </div>
        <div>
          <h1>Explore courses by popularity</h1>
          <Columns>
            {allCourses.map((course, index) => (
              <Columns.Column size={4} key={index}>
                <CourseCard
                  className="course-link"
                  key={index}
                  title={course.title}
                  description={course.description}
                  content={course.content}
                  image={course.media.image}
                />
              </Columns.Column>
            ))}
          </Columns>
        </div>
      </div>
    );
  }
}
