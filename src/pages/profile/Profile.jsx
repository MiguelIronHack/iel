import React, { Component } from "react";
import { getLocalToken, setLocalToken } from "./../../api/ajaxLogin";
import { Card, Media, Image, Heading, Content } from "react-bulma-components";
import "./profile.css";
import { Link } from "react-router-dom";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export class Profile extends Component {
  state = {
    name: "João Cabeça de Chouriço",
    courses: ["JS", "React", "HTML", "CSS"],
    user: {}
  };

  componentDidMount() {
    const userData = getLocalToken();
    console.log(userData.enrolledCourses);
    this.setState({ user: getLocalToken() });
    console.log(this.state, " this is the new state");
  }

  handleDelete = e => {
    console.log(e.target);
    e.target.parentElement.parentElement.parentElement.remove();
  };

  render() {
    if (!window.localStorage.userCredential) this.props.history.push("/");
    return (
      <section className="profile-section">
        <Heading>Enrolled Courses</Heading>
        <table className="table profile-table columns">
          {this.state.courses.map((name, i) => (
            <tbody key={i}>
              <tr>
                <td className="column">
                  <Card className="has-background-grey-dark has-text-white-ter">
                    <Card.Header>
                      <Link to={name}>
                        <Card.Header.Title className="has-text-white-ter">
                          {name}
                        </Card.Header.Title>
                      </Link>
                    </Card.Header>
                    <Card.Content>
                      <Media>
                        <Media.Item renderAs="figure" position="left">
                          <Image
                            size={64}
                            alt="64x64"
                            src="http://bulma.io/images/placeholders/128x128.png"
                          />
                        </Media.Item>
                        <Media.Item>
                          <Heading className="has-text-white-ter" size={4}>
                            John Smith
                          </Heading>
                          <Heading subtitle size={6}>
                            @johnsmith
                          </Heading>
                        </Media.Item>
                      </Media>
                      <Content>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Phasellus nec iaculis mauris.
                        <br />
                        <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                      </Content>
                    </Card.Content>
                    <Card.Footer>
                      <Link className="link" to={name}>
                        <Card.Footer.Item renderAs="p">Resume</Card.Footer.Item>
                      </Link>
                      <div
                        className="profile-delete-btn is-danger"
                        onClick={this.handleDelete}
                      >
                        <FontAwesomeIcon icon={faTimesCircle} />
                      </div>
                    </Card.Footer>
                  </Card>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </section>
    );
  }
}

export default Profile;
