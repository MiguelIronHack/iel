import React, { Component } from "react";

export default class CategoryCourses extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      courses: []
    };
  }
  componentDidMount() {}
  render() {
    const { course } = this.state;
    return <React.Fragment />;
  }
}
