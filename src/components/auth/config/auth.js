const tokenName = "userCredentials";

export const getLocalToken = () => {
  return JSON.parse(window.localStorage.getItem(email || password));
};
