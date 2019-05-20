import React, { Component } from "react";
import { getUserPublic } from "../../api/userHandler";
import UserPublicCard from "./../../components/UserPublicCard";
import TagChart from "../profile/TagChart";
import List from "./../../components/List";
import { CourseCard } from "./../../components/CourseCard";
import { getUserCourses } from "../../api/coursesHandler";
class PublicProfile extends Component {
  state = {};

  componentDidMount() {
    const userId = this.props.match.params.id;

    const navigation = [
      { path: "enrolledCourses", name: "Enrolled courses" },
      { path: "finishedCourses", name: "Finished courses" }
    ];

    getUserPublic(userId)
      .then(({ data: user }) =>
        this.setState({ user, navigation, selectedPath: navigation[0] })
      )
      .catch(err => console.log(err));

    getUserCourses(userId)
      .then(({ data: courses }) => {
        const coursePopularityPerCategory = {};
        courses.forEach(course => {
          console.log(course);
          if (
            coursePopularityPerCategory.hasOwnProperty(course.category[0].name)
          ) {
            coursePopularityPerCategory[course.category[0].name] =
              coursePopularityPerCategory[course.category[0].name] +
              course.likes.length;
          } else if (
            !coursePopularityPerCategory.hasOwnProperty(course.category.name)
          ) {
            coursePopularityPerCategory[course.category[0].name] =
              course.likes.length;
          }
        });
        this.setState({ coursePopularityPerCategory });
      })
      .catch(err => console.log(err));
  }

  handleView = item => {
    this.setState({ selectedPath: item });
  };

  render() {
    const { navigation, user, selectedPath } = this.state;
    if (!user || !navigation) return <h1>Error</h1>;
    const selectedView = user[selectedPath.path];
    console.log(this.state.coursePopularityPerCategory);
    return (
      <section className="section">
        <div className="columns is-12">
          <div className=" container shadow column is-5">
            <div className=" profile-user-info">
              <UserPublicCard user={this.state.user} />
            </div>
          </div>
          <div className="column is-7">
            <ul className="categories-menu">
              {navigation.map(item => (
                <li onClick={() => this.handleView(item)} key={item.path}>
                  {item.name}
                </li>
              ))}
            </ul>
            <List data={selectedView} />
          </div>
        </div>
      </section>
    );
  }
}

export default PublicProfile;
