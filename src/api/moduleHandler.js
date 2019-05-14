import axios from "axios";

const url = "http://localhost:4000/api/module";

export const createModule = courseId => {
  return axios.post(url + "/create", { courseId });
};

export const updateModule = (moduleId, data) =>
  axios.patch(url + "/" + moduleId, data);
