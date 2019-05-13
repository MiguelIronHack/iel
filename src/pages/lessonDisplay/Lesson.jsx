import React from "react";
import { convertFromRaw, EditorState } from "draft-js";
import { stateToHTML } from "draft-js-export-html";

const Lesson = ({ lesson }) => {
  if (typeof lesson === "undefined") return null;

  const convertToHtml = lesson => {
    const raw = JSON.parse(lesson.content);
    const contentState = convertFromRaw(raw);
    const editorState = EditorState.createWithContent(contentState);
    const html = stateToHTML(editorState.getCurrentContent());
    return html;
  };

  //   console.log(stateToHTML(editorState.getCurrentContent()));
  return (
    <React.Fragment>
      <div dangerouslySetInnerHTML={{ __html: convertToHtml(lesson) }} />
    </React.Fragment>
  );
};

export default Lesson;

// class Lesson extends Component {
//     state = {};

//     componentDidMount() {
//       // const raw = JSON.parse(this.props.data.content);
//       // const contentState = convertFromRaw(raw);
//       // const editorState = EditorState.createWithContent(contentState);
//       // this.setState({ editorState: editorState });
//       console.log(this.props);
//     }
//     render() {
//       // console.log(this.props);
//       return <h1>Test</h1>;
//     }
//   }

//   export default Lesson;

// const raw = JSON.parse(res.data.content);
//         const contentState = convertFromRaw(raw);
//         const editorState = EditorState.createWithContent(contentState);
//         this.setState({ editorState: editorState });
