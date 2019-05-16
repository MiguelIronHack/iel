import React, { Component } from "react";
import {
  getAllCategories,
  deleteCategory,
  createCategory,
  updateCategoryTags
} from "../../../api/categoryHandler";
import DashboardNav from "./DashboardNav";
import Input from "./../../../components/Input";
import { createTag } from "../../../api/tagHandler";
import { ToastContainer, toast } from "react-toastify";
import Dropdown from "../../../components/RealDropDown";

export default class EditCategories extends Component {
  state = {
    categories: [],
    tag: "",
    category: ""
  };
  // get the categories and set the state to them
  componentDidMount() {
    getAllCategories()
      .then(res => {
        this.setState({ categories: res.data, selectedCategory: res.data[0] });
      })
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
      this.notifyError("Fill in the category my man");
      return;
    }
    createCategory({ name: category })
      .then(res => this.setState({ category: "" }))
      .catch(err => console.log(err));
  };

  handleDropdown = selectedCategory => this.setState({ selectedCategory });

  handleTag = () => {
    const { tag } = this.state;
    if (!tag) {
      this.notifyError("Fill in the tag my man");
      return;
    }
    createTag({ name: tag })
      .then(res =>
        updateCategoryTags(this.state.selectedCategory._id, res.data)
          .then(res2 => this.setState({ tag: "" }))
          .catch(err2 => console.log(err2))
      )
      .catch(err => console.log(err));
  };

  render() {
    const { categories, selectedCategory } = this.state;
    const { onChange, onClick, newCategory, handleTag, handleCategory } = this;
    return (
      <React.Fragment>
        <DashboardNav />
        <section className="category-section">
          <div className="columns">
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

            <div className="column is-5 box container">
              {selectedCategory && (
                <p>
                  Tags in <b>{` ${selectedCategory.name}`}</b>
                </p>
              )}
              {selectedCategory &&
                selectedCategory.tags.map(tag => (
                  <p key={tag._id}>{tag.name}</p>
                ))}
            </div>
          </div>
          <div className="columns">
            <div className="column is-5 box container">
              <Input
                name="category"
                text={this.state.category}
                label="Category"
                handleChange={onChange}
              />
              <button className="button" onClick={handleCategory}>
                New Category
              </button>
            </div>
            <div className=" column  is-5 box container">
              <h1>Select a Category you want to create your tags for</h1>
              <Dropdown
                name="category"
                currentItem={selectedCategory}
                data={categories}
                handleSelect={this.handleDropdown}
              />
              <Input
                text={this.state.tag}
                name="tag"
                label="Tag"
                handleChange={onChange}
              />
              <button className="button" onClick={handleTag}>
                New Tag
              </button>
            </div>
          </div>
          <ToastContainer />
        </section>
      </React.Fragment>
    );
  }
}
