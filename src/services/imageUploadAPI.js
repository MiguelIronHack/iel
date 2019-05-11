import axios from "axios";

const uploadUrl = "http://localhost:4000/upload";

export const uploadImage = evt => {
  const files = Array.from(evt.target.files);
  const formData = new FormData();
  files.forEach((file, i) => {
    formData.append(i, file);
  });
  return axios.post(uploadUrl + "/image", formData);
};
