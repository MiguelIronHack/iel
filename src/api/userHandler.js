import axios from "axios";

const ApiUrl = "http://localhost:4000/api";

//---------------USERS-------------------
export const createUser = infos => axios.post(`${ApiUrl}/auth/create`, infos);

export const getUser = id => axios.get(`${ApiUrl}/user/${id}`);

export const getAllUsers = () => axios.get(`${ApiUrl}/user`);

export const deleteUser = id => axios.delete(`${ApiUrl}/user/${id}`);

