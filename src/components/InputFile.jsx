import React from "react";

const InputFile = props => {
  const raiseImage = e => {
    props.handleImage(e.target.files);
  };

  return (
    <div class="file edit-course-upload-image">
      <label class="file-label">
        <input
          className="file-input"
          onChange={e => raiseImage(e)}
          id="inputImgFile"
          type="file"
        />
        <span class="file-cta">
          <span class="file-icon">
            <i class="fas fa-upload" />
          </span>
          <span class="file-label">upload an image...</span>
        </span>
      </label>
    </div>
  );
};
export default InputFile;
