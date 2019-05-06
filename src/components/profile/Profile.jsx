import React, { Component } from "react";
import {
  Menu,
  Card,
  Media,
  Image,
  Heading,
  Content
} from "react-bulma-components";
import "./profile.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCog } from "@fortawesome/free-solid-svg-icons";
import UploadForm from "../upload/UploadForm";

export class Profile extends Component {
  state = {
    name: "João Cabeça de Chouriço",
    courses: ["JS", "React", "HTML", "CSS"]
  };
  render() {
    return (
      <section className="profile-section">
        <UploadForm />
        <Menu>
          <Menu.List title="Profile">
            <Menu.List.Item>{this.state.name}</Menu.List.Item>
            <Menu.List.Item>
              <Link to="settings">
                Settings
                <FontAwesomeIcon className="ml-1" icon={faUserCog} />
              </Link>
            </Menu.List.Item>
          </Menu.List>

          <Menu.List title="Administration">
            <Menu.List.Item active>
              <Menu.List title="Manage Your Courses">
                <table className="table profile-table">
                  <thead>
                    <tr>
                      <th className="profile-th">Enrolled courses</th>
                    </tr>
                  </thead>
                  {this.state.courses.map((name, i) => (
                    <tbody key={i}>
                      <tr>
                        <td>
                          <Card>
                            <Card.Header>
                              <Link to={name}>
                                <Card.Header.Title>{name}</Card.Header.Title>
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
                                  <Heading size={4}>John Smith</Heading>
                                  <Heading subtitle size={6}>
                                    @johnsmith
                                  </Heading>
                                </Media.Item>
                              </Media>
                              <Content>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Phasellus nec iaculis mauris.{" "}
                                <br />
                                <time dateTime="2016-1-1">
                                  11:09 PM - 1 Jan 2016
                                </time>
                              </Content>
                            </Card.Content>
                            <Card.Footer>
                              <Link to={name}>
                                <Card.Footer.Item renderAs="p">
                                  Resume
                                </Card.Footer.Item>
                              </Link>
                              <Link to="delete">
                                <Card.Footer.Item
                                  className="has-text-danger danger-hover"
                                  renderAs="p"
                                >
                                  Delete
                                </Card.Footer.Item>
                              </Link>
                            </Card.Footer>
                          </Card>
                        </td>
                      </tr>
                    </tbody>
                  ))}
                </table>
              </Menu.List>
            </Menu.List.Item>
          </Menu.List>
          <Menu.List title="Account">
            <Menu.List.Item>Logout</Menu.List.Item>
          </Menu.List>
        </Menu>
      </section>
    );
  }
}

export default Profile;
