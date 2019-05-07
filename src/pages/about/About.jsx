import React, { Component } from "react";
import { Editor, EditorState, RichUtils, convertToRaw } from "draft-js";

export default class about extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty()
    };
  }

  onChange(editorState) {
    this.setState({ editorState });
    console.log(this.state.editorState);
  }

  makeBold() {
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, "BOLD"));
  }

  render() {
    const raw = convertToRaw(this.state.editorState.getCurrentContent());

    return (
      <React.Fragment>
        <button
          onClick={() => {
            this.makeBold();
          }}
          className="button"
        >
          Bold
        </button>
        <Editor
          onChange={editorState => this.onChange(editorState)}
          editorState={this.state.editorState}
          placeholder="This is the editor"
        />

        <div>{JSON.stringify(raw)}</div>
      </React.Fragment>
    );
  }
}
