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
    selectedCategory: {},
    courses: []
  };

  componentDidMount() {
    getAllCategories().then(res => {
      this.setState({
        categories: res.data
        // selectedCategory: res.data[0]
      });
    });
    getAllCourses().then(res => {
      this.setState({
        courses: res.data
      });
    });
  }

  handleCategory = e => {
    console.log("eeeee ", e);
    console.log("eeeee id ", e._id);
    const id = e._id;
    console.log(id, "  IDIDID");
    getCategory(id)
      .then(res => {
        console.log("clisk en category ", res.data);
        this.setState({
          selectedCategory: res.data
        });
      })
      .catch(err => console.error(err.response, "qqqqqq"));
  };

  render() {
    const { categories, selectedCategory, courses } = this.state;
    if (!selectedCategory && !courses.length) return;
    // console.log(courses.length, selectedCategory);
    // console.log(courses, " courses");
    // console.log("diwjqdijwdiqujdq", courses[0]);
    const filtered = courses.filter(
      course => course.category === selectedCategory._id
    );

    return (
      <div>
        <h1>Explore courses by category</h1>
        <div className="explore-section">
          <nav>
            <ul>
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
          </nav>
          {filtered.map((course, index) => (
            <CourseCard
              key={index}
              title={course.title}
              description={course.description}
              date={course.date}
            />
          ))}
        </div>
      </div>
    );
  }
}
