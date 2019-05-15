import axios from "axios";

const url =
  process.env.REACT_APP_BACK_URL + process.env.REACT_APP_BACK_PORT + "/api/tag";

export const getAllTags = () => axios.get(url);
