import axios from "axios";

const url = "http://localhost:4000/api/lesson";

export const getLessons = () => axios.get(url);
