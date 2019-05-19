import React, { Component } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";
import { convertToRaw, convertFromRaw } from "draft-js";
import "../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "../createLesson/createLesson.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dropdown from "../../components/RealDropDown";
import { getAllTags } from "../../api/tagHandler";
import SidePanel from "../components/CourseSidePanel";
import { faPlus, faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import { getOneLesson } from "./../../api/lessonHandler";
class EditLesson extends Component {
  state = {};

  componentDidMount() {
    getAllTags()
      .then(({ data }) => {
        this.setState({
          tags: data,
          selectedTag: data[0]
        });
      })
      .catch(err => console.log("There was an error with the db", err));

    const lessonId = "5cdcd608fec7a30cccb40b44";
    getOneLesson(lessonId)
      .then(({ data }) => {
        const x = data.content;
        const converted = convertFromRaw(JSON.parse(x));
        const editorState = EditorState.createWithContent(converted);
        this.setState({ editorState: editorState });
      })
      .catch(err => console.log(err));
  }

  handleInput = e => {};
  handleSubmit = e => {};

  onContentStateChange = editorState => {
    this.setState({ editorState });
  };

  saveChanges = e => {
    console.log("i have been clicked");
  };

  render() {
    const { selectedTag, tags } = this.state;
    return (
      <>
        <div className="form-submit-lesson">
          <form onSubmit={this.handleSubmit}>
            <div className="column is-4">
              <input
                className=" input is-info"
                placeholder="Lesson title"
                name="title"
                onChange={this.handleInput}
                // value={title}
              />
            </div>
            <div className="column is-4">
              <input
                className="input is-info"
                placeholder="Description"
                name="description"
                onChange={this.handleInput}
                // value={description}
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

export default EditLesson;
