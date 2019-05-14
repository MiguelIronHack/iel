import React, { Component } from "react";
// import { NavLink } from "react-router-dom";
import { Card, Media, Image, Content, Heading } from "react-bulma-components";
import Moment from "react-moment";

export class Course extends Component {
  render() {
    return (
      <>
        <Card className="course-card shadow">
          <Card.Content>
            <Media>
              <Media.Item
                className="course-img"
                renderAs="figure"
                position="left"
              >
                <Image alt={this.props.title} src={this.props.image} />
              </Media.Item>
              <Media.Item>
                <Heading size={5}>{this.props.title}</Heading>
                <p className="card-subtitle">{this.props.description}</p>
              </Media.Item>
            </Media>
            <Content>
              <Moment format="DD/MM/YYYY">{this.props.date}</Moment>
            </Content>
          </Card.Content>
        </Card>
      </>
    );
  }
}

export default Course;
