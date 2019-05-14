import React, { Component } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";
import { convertFromRaw, convertToRaw } from "draft-js";
import "../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "./about.css";
import { createLesson, getOneLesson } from "../../api/lessonHandler";
import { getLocalToken } from "../../api/ajaxLogin.js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//TODO CLEAN INPUTS AND DENY SUBMISSION IF THE FIELDS ARE EMPTY

class TextEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty(),
      title: "",
      description: ""
    };
  }

  notifyError = message =>
    toast(
      "Something went bad, might be us, might be you, we don't know " + message,
      {
        type: toast.TYPE.ERROR
      }
    );

  notifySuccess = () =>
    toast("Your lesson has been submitted my bruddahs", {
      type: toast.TYPE.SUCCESS
    });

  onContentStateChange = editorState => {
    this.setState({ editorState });
  };

  handleInput = ({ currentTarget }) => {
    const key = currentTarget.name;
    const value = currentTarget.value;
    this.setState({ [key]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { title, description } = this.state;
    const user = getLocalToken();
    const raw = convertToRaw(this.state.editorState.getCurrentContent());
    const rawJSON = JSON.stringify(raw);
    createLesson({
      content: rawJSON,
      teacher: user._id,
      title,
      description
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
    const { description, title } = this.state;
    return (
      <div className="form-submit-lesson">
        <form onSubmit={this.handleSubmit}>
          <div className="column is-4">
            <input
              className=" input is-info"
              placeHolder="Course title"
              name="title"
              onChange={this.handleInput}
              value={title}
            />
          </div>
          <div className="column is-4">
            <input
              className="input is-info"
              placeHolder="Description"
              name="description"
              onChange={this.handleInput}
              value={description}
            />
          </div>
          <label className="title">Lesson Content</label>
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
          <button className="button is-success">Submit Lesson</button>
          <ToastContainer />
        </form>
      </div>
    );
  }
}

export default TextEditor;
