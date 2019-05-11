const tokenName = "userCredential";

/**
 * @return {(string|null)} the auth token if found, null otherwise
 */
export const getLocalToken = function getLocalToken(name) {
  return JSON.parse(window.localStorage.getItem(name || tokenName));
};

/**
 *
 * @param {*} token
 * @return {undefined} void return
 */
export const setLocalToken = function setLocalToken(token, name) {
  window.localStorage.setItem(name || tokenName, JSON.stringify(token));
};

/**
 *
 * @return {undefined} void return
 */
export const deleteLocalToken = function deleteLocalToken(name) {
  window.localStorage.removeItem(name || tokenName);
};

export const logUserOut = function logUserOut() {
  deleteLocalToken();
};

/**
 *
 * @return {boolean} True if user is logged in, false otherwise
 */
export const isLoggedIn = function isLoggedIn() {
  return Boolean(getLocalToken());
};

export const requireAuth = function requireAuth(nextState, replace) {
  if (!isLoggedIn()) {
    replace({ pathname: "/login" });
  }
};
