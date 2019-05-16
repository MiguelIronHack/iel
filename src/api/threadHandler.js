import axios from "axios";

const ApiUrl = process.env.REACT_APP_BACK_URL + "/api";

export const getAllThreads = () => axios.get(`${ApiUrl}/thread`);

export const createThread = data => axios.post(`${ApiUrl}/thread/create`, data);

export const getThread = id => axios.get(`${ApiUrl}/thread/${id}`);

export const deleteThread = id => axios.delete(`${ApiUrl}/thread/${id}`);

export const updateThread = (id, data) =>
  axios.patch(`${ApiUrl}/thread/${id}`, data);

export const getUserThreads = userId =>
  axios.get(ApiUrl + "/thread/user-thread/" + userId);

export default {
  getAllThreads,
  createThread,
  getThread,
  deleteThread,
  updateThread,
  getUserThreads
};
