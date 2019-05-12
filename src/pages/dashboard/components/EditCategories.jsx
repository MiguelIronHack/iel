import React, { Component } from "react";
import {
  getAllCategories,
  deleteCategory,
  createCategory
} from "../../../api/categoryHandler";
import Nav from "./DashboardNav";

export default class EditCategories extends Component {
  state = {
    category: "",
    categories: []
  };
  // get the categories and set the state to them
  componentDidMount() {
    getAllCategories()
      .then(res => this.setState({ categories: res.data }))
      .catch(err => console.error(err));
  }
  // get the values of the input
  onChange = e => {
    this.setState({
      category: e.target.value
    });
  };
  // deleting a category by getting it's id
  onClick = e => {
    const target = e.target.parentElement;
    target.remove();
    deleteCategory(target.id).then(console.log("category removed"));
  };
  // creating a new category
  newCategory = e => {
    e.preventDefault();
    createCategory({
      name: this.state.category
    });

    getAllCategories()
      .then(res => this.setState({ categories: res.data }))
      .catch(err => console.error(err));
  };

  render() {
    const { categories } = this.state;
    const { onChange, onClick, newCategory } = this;
    return (
      <React.Fragment>
        <Nav />
        <section className="category-section">
          <table className="table">
            <thead>
              <tr>
                <th>Category</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {categories.map((e, i) => (
                <tr id={e._id} key={i}>
                  <td>{e.name}</td>

                  <td onClick={onClick}>X</td>
                </tr>
              ))}
            </tbody>
          </table>
          <form className="box container" onSubmit={newCategory}>
            <label htmlFor="category" />
            <input
              className="input"
              type="text"
              id="category"
              onChange={onChange}
            />
            <button className="button">New Category</button>
          </form>
        </section>
      </React.Fragment>
    );
  }
}
