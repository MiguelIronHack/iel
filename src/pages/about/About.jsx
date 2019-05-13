import React, { Component } from "react";
import { Editor } from "react-draft-wysiwyg";
import { convertFromRaw } from "draft-js";
import "../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "./about.css";
import { createLesson } from "../../api/lessonHandler";
import { getLocalToken } from "../../api/ajaxLogin.js";
const content = {
  entityMap: {},
  blocks: [
    {
      key: "637gr",
      text: "Initialized from content state.",
      type: "unstyled",
      depth: 0,
      inlineStyleRanges: [],
      entityRanges: [],
      data: {}
    }
  ]
};

class TextEditor extends Component {
  constructor(props) {
    super(props);
    const contentState = JSON.stringify(content);
    console.log(typeof contentState, " typeoooff");
    this.state = {
      contentState
    };
  }

  onContentStateChange = contentState => {
    this.setState({
      contentState
    });
  };

  handleSubmit = e => {
    const user = getLocalToken();
    e.preventDefault();
    console.log(this.state.contentState, " ono");

    createLesson({
      content: this.state.contentState,
      teacher: user._id
    })
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };
  render() {
    const { contentState } = this.state;
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
              wrapperClassName="wrapper-class"
              editorClassName="editor-class"
              toolbarClassName="toolbar-class"
              onChange={this.onContentStateChange}
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
