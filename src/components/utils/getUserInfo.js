import _ from "lodash";

const getUserInfo = user => {
  return _.pick(user, ["avatar", "userName", "firstName"]);
};

export default getUserInfo;
