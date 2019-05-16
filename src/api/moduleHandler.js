import axios from "axios";

const url = process.env.REACT_APP_BACK_URL + "/api/module";

export const createModule = courseId => {
  return axios.post(url + "/create", { courseId });
};

export const updateModule = (moduleId, data) =>
  axios.patch(url + "/" + moduleId, data);

export const getModule = id => axios.get(url + "/" + id);
