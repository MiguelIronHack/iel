import React, { Component } from "react";
import { getAllCategories } from "../../api/categoryHandler";
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
      .then(({ data: categories }) => {
        const allCourses = [];
        categories.forEach(cat =>
          cat.courses.forEach(course => allCourses.push(course))
        );
        const generalCat = { _id: "", name: "All" };
        this.setState({
          categories: [generalCat, ...categories],
          courses: allCourses,
          selectedCategory: generalCat
        });
      })
      .catch(err => console.error(err));
  }

  handleCategory = category => {
    this.setState({ selectedCategory: category });
  };

  render() {
    const { categories, courses, selectedCategory } = this.state;
    const filteredCourses =
      selectedCategory && selectedCategory._id
        ? courses.filter(course => course.category[0] === selectedCategory._id)
        : courses;

    return (
      <section id="explore-section" className="explore-section">
        <div>
          <h1 className="explore-by-cat-header ">
            Explore courses by clicking on a category
          </h1>
          <div className="explore-section">
            <ul className="categories-menu">
              {categories.map((cat, index) => (
                <li
                  key={index}
                  data-id={cat._id}
                  onClick={() => this.handleCategory(cat)}
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
                filteredCourses.map((course, index) => (
                  <Columns.Column size={6} key={index}>
                    <CourseCard
                      key={index}
                      id={course._id}
                      title={course.title}
                      description={course.description}
                      date={course.date}
                      image={course.media.image}
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
            {courses.map((course, index) => (
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
