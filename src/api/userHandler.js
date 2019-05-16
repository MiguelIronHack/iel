import axios from "axios";
import { getLocalToken, deleteLocalToken } from "./ajaxLogin";

// const port = process.env.REACT_APP_BACK_PORT;
const ApiUrl = process.env.REACT_APP_BACK_URL + "api";

const config = {
  withCredentials: true,
  headers: {
    "Content-Type": "application/json"
  }
  // ,
  // proxy: {
  //   host: "localhost",
  //   port: port,
  //   auth: getLocalToken()
  // }
};

//---------------USERS-------------------
export const createUser = infos => axios.post(`${ApiUrl}/auth/create`, infos);

export const getUser = id => axios.get(`${ApiUrl}/user/${id}`);

export const getAllUsers = () => axios.get(`${ApiUrl}/user`);

export const deleteUser = id => axios.delete(`${ApiUrl}/user/${id}`);

export const login = userInfos => axios.post(`${ApiUrl}/auth/login`, userInfos);

export const userEnrolls = (id, data) =>
  axios.patch(ApiUrl + "/user/user-enrolls/" + id, data);

export const editUser = (id, data) => {
  return axios.patch(`${ApiUrl}/user/${id}`, data);
};

export const logout = () => {
  deleteLocalToken();
  return axios.post(`${ApiUrl}/auth/logout`, { config });
};
