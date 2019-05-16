import React from "react";

const InputFile = props => {
  const raiseImage = e => {
    props.handleImage(e.target.files);
  };

  return (
    <div className="file edit-course-upload-image">
      <label className="file-label">
        <input
          className="file-input"
          onChange={e => raiseImage(e)}
          id="inputImgFile"
          type="file"
        />
        <span className="file-cta">
          <span className="file-icon">
            <i className="fas fa-upload" />
          </span>
          <span className="file-label">{props.name}</span>
        </span>
      </label>
    </div>
  );
};
export default InputFile;
