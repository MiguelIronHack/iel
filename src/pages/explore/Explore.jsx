import React, { Component } from "react";
import { getAllCategories } from "../../api/categoryHandler";
import { getCategory } from "../../api/categoryHandler";
import { getAllCourses } from "../../api/coursesHandler";
import { Link } from "react-router-dom";
import { Columns } from "react-bulma-components";
import "./explore.css";
import CourseCard from "../../components/CourseCard";
//TODO DEFAULT CATEGORY
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
        console.log(res.data[0].courses);
      })
      .catch(err => console.error(err));

    getAllCourses()
      .then(res => {
        this.setState({
          allCourses: res.data
        });
      })
      .catch(err => console.error(err));
  }

  handleCategory = e => {
    const id = e._id;
    getCategory(id)
      .then(res => {
        console.log(res.data);
        this.setState({
          selectedCategory: res.data,
          courses: res.data.courses
        });
      })
      .catch(err => console.error(err));
  };

  render() {
    const { categories, courses, allCourses } = this.state;
    return (
      <section className="explore-section">
        <div>
          <h1 className="explore-by-cat-header ">
            Explore courses by category
          </h1>
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
              {!courses.length ? (
                <div className="section">
                  <h1 className="title">There are no courses</h1>
                </div>
              ) : (
                courses.map((course, index) => (
                  <Columns.Column size={4} key={index}>
                    <CourseCard
                      key={index}
                      id={course._id}
                      title={course.title}
                      description={course.description}
                      date={course.date}
                    />
                  </Columns.Column>
                ))
              )}
            </Columns>
          </div>
        </div>
        <div>
          <h1 className="explore-by-pop-header">
            Explore courses by popularity
          </h1>
          <Columns>
            {allCourses.map((course, index) => (
              <Columns.Column size={4} key={index}>
                <CourseCard
                  className="course-link"
                  key={index}
                  id={course._id}
                  title={course.title}
                  description={course.description}
                  content={course.content}
                  image={course.media.image}
                />
              </Columns.Column>
            ))}
          </Columns>
        </div>
      </section>
    );
  }
}
