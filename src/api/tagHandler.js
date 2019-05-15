import axios from "axios";

const url = process.env.REACT_APP_BACK_URL + "/api/tag";

export const getAllTags = () => axios.get(url);
