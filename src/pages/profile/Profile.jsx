import React, { Component } from "react";
import {
  Menu,
  Card,
  Media,
  Image,
  Heading,
  Content,
  Button
} from "react-bulma-components";
import "./profile.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCog } from "@fortawesome/free-solid-svg-icons";

export class Profile extends Component {
  state = {
    name: "João Cabeça de Chouriço",
    courses: ["JS", "React", "HTML", "CSS"]
  };

  handleDelete = e => {
    console.log(e.target);
    //TODO HANDLE DELETE BUTTON
  };

  render() {
    return (
      <section className="profile-section">
        <table className="table profile-table columns">
          {this.state.courses.map((name, i) => (
            <tbody key={i}>
              <tr>
                <td className="column">
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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Phasellus nec iaculis mauris.
                        <br />
                        <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                      </Content>
                    </Card.Content>
                    <Card.Footer>
                      <Link to={name}>
                        <Card.Footer.Item renderAs="p">Resume</Card.Footer.Item>
                      </Link>
                      <Button remove onClick={this.handleDelete} />
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
