import React, { Component } from "react";
// import { NavLink } from "react-router-dom";
import { Card, Media, Image, Content, Heading } from "react-bulma-components";
import Moment from "react-moment";

export class Course extends Component {
  render() {
    return (
      <React.Fragment>
        <Card>
          <Card.Content>
            <Media>
              <Media.Item renderAs="figure" position="left">
                <Image
                  size={64}
                  alt={this.props.title}
                  src={this.props.image}
                />
              </Media.Item>
              <Media.Item>
                <Heading size={4}>{this.props.title}</Heading>
                <Heading subtitle size={6}>
                  {this.props.description}
                </Heading>
              </Media.Item>
            </Media>
            <Content>
              {this.props.content}
              <br />
              <Moment format="DD/MM/YYYY">{this.props.date}</Moment>
            </Content>
          </Card.Content>
        </Card>
      </React.Fragment>
    );
  }
}

export default Course;
