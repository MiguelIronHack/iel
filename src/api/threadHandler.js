import axios from "axios";

const url = process.env.REACT_APP_BACK_URL + "/api";

export const getAllThreads = () => axios.get(`${url}/thread`);

export const createThread = data => axios.post(`${url}/thread/create`, data);

export const getThread = id => axios.get(`${url}/thread/${id}`);

export const deleteThread = id => axios.delete(`${url}/thread/${id}`);

export const updateThread = (id, data) =>
  axios.patch(`${url}/thread/${id}`, data);

export const getUserThreads = userId =>
  axios.get(url + "/thread/user-thread/" + userId);

export default {
  getAllThreads,
  createThread,
  getThread,
  deleteThread,
  updateThread,
  getUserThreads
};
