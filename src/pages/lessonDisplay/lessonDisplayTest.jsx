import React, { Component } from "react";
import { EditorState, convertToRaw, ContentState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";
import { getLessons } from "../../api/lessonHandler";

class EditorConvertToHTML extends Component {
  constructor(props) {
    super(props);
    const html = "<p>Hey this <strong>editor</strong> rocks 😀</p>";
    const contentBlock = htmlToDraft(html);
    const contentState = ContentState.createFromBlockArray(
      contentBlock.contentBlocks
    );
    const editorState = EditorState.createWithContent(contentState);
    this.state = {
      editorState
    };
  }

  componentDidMount() {
    getLessons()
      .then(res => {
        const converted = convertToRaw(res.data.content);
        console.log("lessons data", converted);
        this.html = res.data;
        this.setState(res.data);
      })
      .catch(err => console.error(err.response));
  }

  // onEditorStateChange: Function = editorState => {
  //   this.setState({
  //     editorState
  //   });
  // };

  render() {
    const { editorState } = this.state;
    return (
      <div>
        <Editor
          editorState={editorState}
          wrapperClassName="demo-wrapper"
          editorClassName="demo-editor"
          // onEditorStateChange={this.onEditorStateChange}
        />
      </div>
    );
  }
}

export default EditorConvertToHTML;
