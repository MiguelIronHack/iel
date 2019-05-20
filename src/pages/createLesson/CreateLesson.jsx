import React, { Component } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";
import { convertToRaw } from "draft-js";
import "../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "./createLesson.css";
import { createLesson } from "../../api/lessonHandler";
import { getLocalToken } from "../../api/ajaxLogin.js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dropdown from "../../components/RealDropDown";
import { getAllTags } from "../../api/tagHandler";
import SidePanel from "../components/CourseSidePanel";
import { faPlus, faSignInAlt } from "@fortawesome/free-solid-svg-icons";

class TextEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty(),
      title: "",
      description: "",
      courseModules: []
    };
  }

  componentDidMount() {
    getAllTags()
      .then(({ data }) => {
        this.setState({
          tags: data,
          selectedTag: data[0]
        });
      })
      .catch(err => console.log("There was an error with the db", err));
  }

  notifyError = message =>
    toast(message, {
      type: toast.TYPE.ERROR
    });

  notifySuccess = () =>
    toast("Your lesson has been submitted my bruddahs", {
      type: toast.TYPE.SUCCESS
    });

  onContentStateChange = editorState => {
    this.setState({ editorState });
  };

  handleTag = tag => {
    this.setState({ selectedTag: tag });
  };

  handleInput = ({ currentTarget }) => {
    const key = currentTarget.name;
    const value = currentTarget.value;
    this.setState({ [key]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { title, description } = this.state;

    if (!title || !description) {
      this.notifyError("You must fill in the form to be able to submit");
      return;
    }
    const user = getLocalToken();
    const raw = convertToRaw(this.state.editorState.getCurrentContent());
    const rawJSON = JSON.stringify(raw);
    createLesson({
      content: rawJSON,
      teacher: user._id,
      title,
      description,
      tags: this.state.selectedTag._id
    })
      .then(res => {
        this.setState({
          title: "",
          description: "",
          editorState: EditorState.createEmpty()
        });
        this.notifySuccess();
      })
      .catch(err => this.notifyError(err));
  };

  render() {
    const { description, title, tags, selectedTag } = this.state;
    return (
      <>
        <SidePanel
          firstNavItem="My Courses"
          firstNavItemIcon={faSignInAlt}
          firstNavItemLink="/profile"
          secondNavItem="Build Course"
          secondNavItemIcon={faPlus}
          secondNavItemLink="/build-course"
          thirdNavItem="Create Lessons"
          thirdNavItemIcon={faPlus}
          thirdNavItemLink="/create/lesson"
          fourthNavItem="Create Course"
          fourthNavItemIcon={faPlus}
          fourthNavItemLink="/create-course"
          fifthNavItem="Edit Lessons"
          fifthNavItemIcon={faPlus}
          fifthNavItemLink="/edit-lesson"
          sixthNavItem="Manage Courses"
          sixthNavItemIcon={faPlus}
          sixthNavItemLink="/coursemanagement"
          courseModules={this.state.courseModules}
        />
        <div className="form-submit-lesson">
          <form onSubmit={this.handleSubmit}>
            <div className="column is-4">
              <input
                className=" input is-info"
                placeholder="Lesson title"
                name="title"
                onChange={this.handleInput}
                value={title}
              />
            </div>
            <div className="column is-4">
              <input
                className="input is-info"
                placeholder="Description"
                name="description"
                onChange={this.handleInput}
                value={description}
              />
            </div>
            <div className="dropdownNsubmit">
              <Dropdown
                data={tags}
                currentItem={selectedTag}
                handleSelect={this.handleTag}
                name="tags"
              />
              <button className="button">Submit Lesson</button>
            </div>

            <label className="title editor-title">Lesson Content</label>
            <div onClick={() => this.focus} className="text-editor">
              <Editor
                editorState={this.state.editorState}
                onEditorStateChange={this.onContentStateChange}
                wrapperClassName="wrapper-class"
                editorClassName="editor-class"
                toolbarClassName="toolbar-class"
                toolbar={{
                  inline: { inDropdown: true },
                  list: { inDropdown: true },
                  textAlign: { inDropdown: true },
                  link: { inDropdown: true },
                  history: { inDropdown: true }
                }}
              />
            </div>

            <ToastContainer />
          </form>
        </div>
      </>
    );
  }
}

export default TextEditor;
