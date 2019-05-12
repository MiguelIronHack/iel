import axios from "axios";

const url = "http://localhost:4000/api/tag";

export const getAllTags = () => axios.get(url);
