import React from "react";
import { convertFromRaw, EditorState } from "draft-js";
import { stateToHTML } from "draft-js-export-html";
import "./lesson.css";
const Lesson = ({ lesson }) => {
  if (typeof lesson === "undefined") return null;

  //THIS IS HOW TO FORMAT THAT INLINE STYLES
  const options = {
    // inlineStyles: {
    //     // Override default element (`strong`).
    //     BOLD: { element: "b" },
    //     ITALIC: {
    //       // Add custom attributes. You can also use React-style `className`.
    //       // attributes: { className: "foo" },
    //       // Use camel-case. Units (`px`) will be added where necessary.
    //       style: { fontSize: 40 }
    //     },
    //   }
    inlineStyleFn: styles => {
      let colorKey = "color-";
      let fontKey = "fontsize-";
      let fontSize = styles.filter(value => value.startsWith(fontKey)).first();
      let color = styles.filter(value => value.startsWith(colorKey)).first();
      let allStyles = { style: {} };
      if (color) {
        allStyles.style = {
          ...allStyles.style,
          color: color.replace(colorKey, "")
        };
      }
      if (fontSize) {
        allStyles.style = {
          ...allStyles.style,
          fontSize: fontSize.replace(fontKey, "")
        };
      }
      return allStyles;
    }
  };

  const convertToHtml = lesson => {
    const raw = JSON.parse(lesson.content);
    const contentState = convertFromRaw(raw);
    const editorState = EditorState.createWithContent(contentState);
    const html = stateToHTML(editorState.getCurrentContent(), options);
    return html;
  };

  return (
    <React.Fragment>
      <div dangerouslySetInnerHTML={{ __html: convertToHtml(lesson) }} />
    </React.Fragment>
  );
};

export default Lesson;
