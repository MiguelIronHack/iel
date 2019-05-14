import axios from "axios";

const ApiUrl = "http://localhost:4000/api";

export const getAllCourses = () => axios.get(`${ApiUrl}/course`);

export const createCourse = data => axios.post(`${ApiUrl}/course/create`, data);

export const getCourse = id => axios.get(`${ApiUrl}/course/${id}`);

export const deleteCourse = id => axios.delete(`${ApiUrl}/course/${id}`);

export const updateCourse = (id, data) =>
  axios.patch(`${ApiUrl}/course/${id}`, data);

export const getUserCourses = userId =>
  axios.get(ApiUrl + "/course/user-course/" + userId);

export const getRandomCourse = () => axios.get(`${ApiUrl}/course/random`);

export default {
  getAllCourses,
  createCourse,
  getCourse,
  deleteCourse,
  updateCourse,
  getUserCourses,
  getRandomCourse
};
