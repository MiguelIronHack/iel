import axios from 'axios';

const ApiUrl = 'http://localhost:4000/api';

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
