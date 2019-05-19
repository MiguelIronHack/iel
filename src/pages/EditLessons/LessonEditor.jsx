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
import { updateLesson } from "../../api/lessonHandler";

class LessonEditor extends Component {
  state = {
    title: "",
    description: ""
  };

  componentDidMount() {
    getAllTags()
      .then(({ data }) => {
        this.setState({
          tags: data,
          selectedTag: data[0]
        });
      })
      .catch(err => console.log("There was an error with the db", err));

    const { lesson } = this.props;
    this.setState({
      title: lesson.title,
      description: lesson.description,
      lesson
    });
    const content = lesson.content;
    const converted = convertFromRaw(JSON.parse(content));
    const editorState = EditorState.createWithContent(converted);
    this.setState({ editorState: editorState });
  }

  notifySuccess = message =>
    toast(message, {
      type: toast.TYPE.SUCCESS
    });

  handleInput = ({ currentTarget }) => {
    const key = currentTarget.name;
    const value = currentTarget.value;
    this.setState({ [key]: value });
  };

  handleTag = selectedTag => {
    this.setState({ selectedTag });
  };

  onContentStateChange = editorState => {
    this.setState({ editorState });
  };

  saveChanges = e => {
    e.preventDefault();
    const { lesson, title, description, selectedTag } = this.state;
    const raw = convertToRaw(this.state.editorState.getCurrentContent());
    const rawJSON = JSON.stringify(raw);
    updateLesson(lesson._id, {
      content: rawJSON,
      title,
      description,
      tags: selectedTag._id
    })
      .then(res => this.notifySuccess("Saved !"))
      .catch(err => console.log(err));
  };

  render() {
    const { selectedTag, tags, title, description } = this.state;
    console.log(this.state.title, this.state.description);
    return (
      <>
        <div className="form-submit-lesson">
          <form onSubmit={this.saveChanges}>
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

export default LessonEditor;
