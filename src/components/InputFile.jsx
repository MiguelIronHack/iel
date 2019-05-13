import React from "react";
import { uploadImage } from "../services/imageUploadAPI.js";

const InputFile = props => {
  const raiseImage = e => {
    props.handleImage(e.target.files);
  };

  return <input onChange={e => raiseImage(e)} id="inputImgFile" type="file" />;
};
export default InputFile;
