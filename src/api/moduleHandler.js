import axios from "axios";

const url =
  process.env.REACT_APP_BACK_URL +
  process.env.REACT_APP_BACK_PORT +
  "/api/module";

export const createModule = courseId => {
  return axios.post(url + "/create", { courseId });
};

export const updateModule = (moduleId, data) =>
  axios.patch(url + "/" + moduleId, data);
