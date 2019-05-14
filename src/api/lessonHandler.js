import axios from "axios";

const url = "http://localhost:4000/api/lesson";

export const getLessons = () => axios.get(url);
export const createLesson = data => axios.post(url + "/create", data);
export const getOneLesson = id => axios.get(url + "/" + id);
