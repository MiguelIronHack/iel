import React from "react";
import { uploadImage } from "../services/imageUploadAPI.js";

export default function InputFile() {
  const handleChange = e => {
    uploadImage(e)
      .then(res => res.secure_url)
      .catch(err => console.error(err));
  };

  return <input id="inputImgFile" type="file" />;
}
