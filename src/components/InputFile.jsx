import React from "react";

const InputFile = props => {
  const raiseImage = e => {
    props.handleImage(e.target.files);
  };

  return <input onChange={e => raiseImage(e)} id="inputImgFile" type="file" />;
};
export default InputFile;
