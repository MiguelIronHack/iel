import React, { Component } from "react";
import {
  getAllCategories,
  deleteCategory,
  createCategory
} from "../../../api/categoryHandler";
import Nav from "./DashboardNav";
import Input from "./../../../components/Input";
import { createTag } from "../../../api/tagHandler";
import { ToastContainer, toast } from "react-toastify";
export default class EditCategories extends Component {
  state = {
    categories: []
  };
  // get the categories and set the state to them
  componentDidMount() {
    getAllCategories()
      .then(res => this.setState({ categories: res.data }))
      .catch(err => console.error(err));
  }
  // get the values of the input
  onChange = ({ currentTarget }) => {
    const key = currentTarget.name;
    const value = currentTarget.value;
    this.setState({ [key]: value });
    // this.setState({
    //   category: e.target.value
    // });
  };
  // deleting a category by getting it's id
  onClick = e => {
    const target = e.target.parentElement;
    target.remove();
    deleteCategory(target.id).then(console.log("category removed"));
  };
  // creating a new category

  notifyError = message =>
    toast(message, {
      type: toast.TYPE.ERROR
    });

  handleCategory = ({ currentTarget }) => {
    const { category } = this.state;
    if (!category) {
      this.notifyError("Fill in the field my man");
      return;
    }
    createCategory({ name: this.state.category })
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
  };

  handleTag = ({ currentTarget }) =>
    createTag({ name: this.state.tag })
      .then(res => console.log(res.data))
      .catch(err => console.log(err));

  render() {
    console.log(this.state.category, this.state.tag);
    const { categories } = this.state;
    const { onChange, onClick, newCategory, handleTag, handleCategory } = this;
    return (
      <React.Fragment>
        <section className="category-section">
          <table className="table shadow">
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
          <div className="box container">
            <Input name="category" label="Category" handleChange={onChange} />
            <button className="button" onClick={handleCategory}>
              New Category
            </button>
            <Input name="tag" label="Tag" handleChange={onChange} />
            <button className="button" onClick={handleTag}>
              New Tag
            </button>
          </div>
          <ToastContainer />
        </section>
      </React.Fragment>
    );
  }
}
