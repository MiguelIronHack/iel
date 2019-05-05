import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Card, Media, Image, Content, Heading } from "react-bulma-components";
import Moment from "react-moment";
const date = Date.now();

export class Course extends Component {
  render() {
    return (
      <React.Fragment>
        <Card>
          <Card.Content>
            <Media>
              <Media.Item renderAs="figure" position="left">
                <Image
                  renderAs="p"
                  size={64}
                  alt="64x64"
                  src="http://bulma.io/images/placeholders/128x128.png"
                />
              </Media.Item>
              <Media.Item>
                <Heading size={4}>Course</Heading>
                <Heading subtitle size={6}>
                  Course Description
                </Heading>
              </Media.Item>
            </Media>
            <Content>
              {this.props.courseContent}
              <br />
              <Moment format="DD/MM/YYYY">{date}</Moment>
            </Content>
          </Card.Content>
        </Card>
      </React.Fragment>
    );
  }
}

export default Course;
