import React, { Component } from "react";
import { getOneLesson } from "../../api/lessonHandler";
import { convertFromRaw } from "draft-js";
class EditLesson extends Component {
  state = {};

  componentDidMount() {
    const lessonId = "5cdcd608fec7a30cccb40b44";
    getOneLesson(lessonId)
      .then(({ data }) => {
        const x = data.content;
        const converted = convertFromRaw(JSON.parse(x));
        console.log(converted);
      })
      .catch(err => console.log(err));
  }

  handleInput = e => {};
  handleSubmit = e => {};

  render() {
    return (
      <>
        {/* <div className="form-submit-lesson">
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
        </div> */}
      </>
    );
  }
}

export default EditLesson;
