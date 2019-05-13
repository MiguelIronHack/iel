import React, { Component } from "react";
import { Editor } from "react-draft-wysiwyg";
import { convertFromRaw } from "draft-js";
import "../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "./about.css";

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
    const contentState = convertFromRaw(content);
    this.state = {
      contentState
    };
  }

  onContentStateChange: Function = contentState => {
    this.setState({
      contentState
    });
  };

  render() {
    const { contentState } = this.state;
    return (
      <div className="form-submit-lesson">
        <form action="">
          <label>Title</label>
          <input />
          <label>Description</label>
          <input />
          <label>Content</label>
          <div className="text-editor">
            <Editor
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
