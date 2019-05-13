import axios from "axios";

const uploadUrl = "http://localhost:4000/upload";

export const uploadImage = fileList => {
  const files = Array.from(fileList);
  const formData = new FormData();
  files.forEach((file, i) => {
    formData.append(i, file);
  });
  return axios.post(uploadUrl + "/image", formData);
};
