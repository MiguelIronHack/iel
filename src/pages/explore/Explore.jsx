import React, { Component } from "react";
import { getAllCategories } from "../../api/categoryHandler";

export default class explore extends Component {
  state = {
    categories: []
  };

  componentDidMount() {
    getAllCategories().then(res => {
      this.setState({
        categories: res.data
      });
    });
  }

  render() {
    const { categories } = this.state;
    console.log(categories);
    return (
      <div>
        {categories.map(e => {
          return <p>{e.name}</p>;
        })}
      </div>
    );
  }
}
