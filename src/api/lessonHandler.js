import axios from "axios";

const url =
  process.env.REACT_APP_BACK_URL +
  process.env.REACT_APP_BACK_PORT +
  "/api/lesson";

export const getLessons = () => axios.get(url);
export const createLesson = data => axios.post(url + "/create", data);
export const getOneLesson = id => axios.get(url + "/" + id);
