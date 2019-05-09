import React, { Component } from "react";
import { Card, Heading, Media, Image, Content } from "react-bulma-components";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class UserSettings extends Component {
  state = {
    isAuth: false,
    userName: this.props.match.params.user
  };

  handleClick = e => {
    console.log(e.target.parentElement.parentElement);
  };
  render() {
    const { user: userName } = this.props.match.params;

    return (
      <Card>
        <Card.Header>
          <Card.Header.Title>Title</Card.Header.Title>
        </Card.Header>
        <Card.Content>
          <Media>
            <Media.Item renderAs="figure" position="left">
              <Image
                renderAs="p"
                size={128}
                alt="64x64"
                src="http://bulma.io/images/placeholders/128x128.png"
              />
              <button className="button">Edit</button>
            </Media.Item>
            <Media.Item>
              <h1 className="user-header">
                {userName}
                <span onClick={this.handleClick}>
                  <i class="fas fa-edit" />
                </span>
              </h1>
              <h1>@whatever</h1>
            </Media.Item>
          </Media>
          <Content>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            nec iaculis mauris. <a>@bulmaio</a>.<a href="#1">#css</a>{" "}
            <a href="#2">#responsive</a>
            <br />
            <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
          </Content>
        </Card.Content>
        <Card.Footer>
          <button className="button">Yes</button>
          <button className="button">No</button>
        </Card.Footer>
      </Card>
    );
  }
}

export default UserSettings;
