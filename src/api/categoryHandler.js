<<<<<<< HEAD
import axios from "axios";

const ApiUrl = "http://localhost:4000/api";
=======
import axios from 'axios';

const ApiUrl = 'http://localhost:4000/api';
>>>>>>> 01e3c102b8d9d4f87468bec3c545c022c7fd28ce

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
