import React, { Component } from "react";
import {
  getAllCategories,
  deleteCategory,
  createCategory
} from "../../../api/categoryHandler";

export default class EditCategories extends Component {
  state = {
    category: "",
    categories: []
  };

  componentDidMount() {
    getAllCategories()
      .then(res => this.setState({ categories: res.data }))
      .catch(err => console.error(err));
  }

  onChange = e => {
    this.setState({
      category: e.target.value
    });
  };

  onClick = e => {
    const target = e.target.parentElement;
    console.log(target.id);
    target.remove();
    deleteCategory(target.id)
      .then(console.log("category removed"))
      .catch(err => console.error(err));
  };

  newCategory = e => {
    e.preventDefault();
    createCategory({
      name: this.state.category
    })
      .then(res => console.log(res.data))
      .catch(err => console.error(err));
  };

  render() {
    const { categories } = this.state;
    const { onChange, onClick, newCategory } = this;
    return (
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
    );
  }
}
