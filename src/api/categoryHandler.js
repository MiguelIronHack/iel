import axios from "axios";

const ApiUrl =
  process.env.REACT_APP_BACK_URL + process.env.REACT_APP_BACK_PORT + "/api";

console.log(ApiUrl);
export const getAllCategories = () => axios.get(`${ApiUrl}/category`);

export const createCategory = data =>
  axios.post(`${ApiUrl}/category/create`, data);

export const getCategory = id => axios.get(`${ApiUrl}/category/${id}`);

export const deleteCategory = id => axios.delete(`${ApiUrl}/category/${id}`);

export default {
  getAllCategories,
  createCategory,
  getCategory,
  deleteCategory
};
