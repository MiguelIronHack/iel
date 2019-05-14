import React, { Component } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";
import { convertFromRaw, convertToRaw } from "draft-js";
import "../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "./about.css";
import { createLesson, getOneLesson } from "../../api/lessonHandler";
import { getLocalToken } from "../../api/ajaxLogin.js";

class TextEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty()
    };
  }

  componentDidMount() {
    getOneLesson("5cda760403db1d2fd468873c")
      .then(res => {
        const raw = JSON.parse(res.data.content);
        const contentState = convertFromRaw(raw);
        const editorState = EditorState.createWithContent(contentState);
        this.setState({ editorState: editorState });
        // const test = convertFromRaw(res.data.content);
        // console.log(test);
        // this.setState({ contentState: res.data.content });
      })
      .catch(err => console.log(err));
  }

  onContentStateChange = editorState => {
    this.setState({ editorState });
    console.log(convertToRaw(this.state.editorState.getCurrentContent()));
  };

  handleSubmit = e => {
    const user = getLocalToken();
    e.preventDefault();
    // console.log(this.state.contentState, " ono");
    const xx = convertToRaw(this.state.editorState.getCurrentContent());
    const ppp = JSON.stringify(xx);
    createLesson({
      content: ppp,
      teacher: user._id
    })
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="form-submit-lesson">
        <form onSubmit={this.handleSubmit}>
          <label>Title</label>
          <input name="title" />
          <label>Description</label>
          <input name="description" />
          <label>Content</label>
          <div className="text-editor">
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
          <button>Submit Lesson</button>
        </form>
      </div>
    );
  }
}

export default TextEditor;
