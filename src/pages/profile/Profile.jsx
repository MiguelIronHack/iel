import React, { Component } from "react";
import { getLocalToken, setLocalToken } from "./../../api/ajaxLogin";
import { getUser } from "../../api/userHandler";
import { editUser } from "../../api/userHandler";
import SidePanel from "../components/CourseSidePanel";
import { faPlus, faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import { Card, Media, Image, Heading, Content } from "react-bulma-components";
import "./profile.css";
import { Link } from "react-router-dom";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Chart from "./TagChart";

export class Profile extends Component {
  state = {
    name: "",
    courses: [],
    user: {},
    courseModules: []
  };

  componentDidMount() {
    const user = getLocalToken();
    // console.log(user);
    this.setState({ user });
    getUser(user._id)
      .then(res => {
        this.setState({
          teacher: res.data.firstName,
          courses: res.data.enrolledCourses
        });
      })
      .catch(err => console.log(err));
  }

  handleDelete = e => {
    const id = e.target.getAttribute("data-id");
    let newCourses = [];
    for (var i = 0; i < this.state.courses.length; i++) {
      if (this.state.courses[i]._id === id) {
      }
    }
    this.setState({ courses: this.state.courses });
    const { enrolledCourses, _id } = this.state.user;
    editUser(_id, { enrolledCourses: this.state.courses })
      .then(res => {
        console.log(res);
      })
      .catch(err => console.log(err));
  };

  render() {
    if (!window.localStorage.userCredential) this.props.history.push("/");

    return (
      <>
        <SidePanel
          firstNavItem="My Courses"
          firstNavItemIcon={faSignInAlt}
          firstNavItemLink="/profile"
          secondNavItem="Build Course"
          secondNavItemIcon={faPlus}
          secondNavItemLink="/build-course"
          thirdNavItem="Create Lessons"
          thirdNavItemIcon={faPlus}
          thirdNavItemLink="/create/lesson"
          fourthNavItem="Create Course"
          fourthNavItemIcon={faPlus}
          fourthNavItemLink="/create-course"
          fifthNavItem="Edit Lessons"
          fifthNavItemIcon={faPlus}
          fifthNavItemLink="/edit-lesson"
          courseModules={this.state.courseModules}
        />

        <section className="profile-section">
          <Heading>Enrolled Courses</Heading>
          <Chart />
          <table className="table profile-table columns">
            <tbody>
              {this.state.courses.map((course, i) => (
                <tr key={i}>
                  <td className="column">
                    <Card className="has-background-grey-dark has-text-white-ter">
                      <Card.Header data-id={course._id}>
                        <Link to={`/public/user/${this.state.teacher}`}>
                          <Card.Header.Title className="has-text-white-ter">
                            {this.state.teacher}
                          </Card.Header.Title>
                        </Link>
                      </Card.Header>
                      <Card.Content>
                        <Media>
                          <Media.Item renderAs="figure" position="left">
                            <Image
                              size={64}
                              alt="64x64"
                              src={course.media.image}
                            />
                          </Media.Item>
                          <Media.Item>
                            <Heading className="has-text-white-ter" size={4}>
                              {course.title}
                            </Heading>
                            <Heading subtitle size={6}>
                              @johnsmith
                            </Heading>
                          </Media.Item>
                        </Media>
                        <Content>
                          {course.description}
                          <br />
                          <time dateTime="2016-1-1">{course.updated_at}</time>
                        </Content>
                      </Card.Content>
                      <Card.Footer>
                        <Link to={`/course/${course._id}`}>
                          <Card.Footer.Item renderAs="p">Go</Card.Footer.Item>
                        </Link>
                        <div
                          className="profile-delete-btn is-danger"
                          data-id={course._id}
                          onClick={this.handleDelete}
                        >
                          <FontAwesomeIcon icon={faTimesCircle} />
                        </div>
                      </Card.Footer>
                    </Card>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </>
    );
  }
}

export default Profile;
